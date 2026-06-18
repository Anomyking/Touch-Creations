import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { sendOrderConfirmation } from "@/lib/email";
import { confirmOrderPayment, getOrderByReference, updateOrderStatus } from "@/lib/db";
import { sendDeliveryUpdate } from "@/lib/email";

const WEBHOOK_SECRET = process.env.INTASEND_WEBHOOK_SECRET ?? "";

function verifySignature(payload: string, signature: string): boolean {
  if (!WEBHOOK_SECRET) return true;
  const expected = crypto.createHmac("sha256", WEBHOOK_SECRET).update(payload).digest("hex");
  return crypto.timingSafeEqual(Buffer.from(expected), Buffer.from(signature));
}

export async function POST(req: NextRequest) {
  try {
    const rawBody = await req.text();
    const sig     = req.headers.get("x-intasend-signature") ?? "";

    if (!verifySignature(rawBody, sig)) {
      return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
    }

    const event = JSON.parse(rawBody);
    const { state, api_ref, invoice_id, net_amount } = event;

    console.log(`Webhook: ${api_ref} → ${state}`);

    if (state === "COMPLETE") {
      // Confirm payment in DB
      const order = await confirmOrderPayment(api_ref);

      // Send confirmation email using real order data
      await sendOrderConfirmation({
        reference:      order.reference,
        customerName:   order.customer_name,
        customerEmail:  order.customer_email,
        customerPhone:  order.customer_phone,
        items:          (order.items as Array<{ product: { name: string }; quantity: number; unitPrice: number }>).map((i) => ({
          name:     i.product.name,
          quantity: i.quantity,
          price:    Math.round(i.unitPrice * (i.quantity / 100)),
        })),
        subtotal:       order.subtotal,
        deliveryFee:    order.delivery_fee,
        total:          order.total,
        deliveryMethod: order.delivery_method,
        paymentMethod:  order.payment_method,
      });

      console.log(`✅ Order confirmed: ${api_ref} — KES ${net_amount}`);
    }

    if (state === "FAILED") {
      console.log(`❌ Payment failed: ${api_ref}`);
      // Optionally: update order payment_status to "failed"
    }

    return NextResponse.json({ received: true, invoice_id });

  } catch (err) {
    console.error("Webhook error:", err);
    return NextResponse.json({ error: "Webhook error" }, { status: 500 });
  }
}

// ─── Admin can also trigger status updates via this endpoint ──────────────────
// POST /api/webhook/status { reference, status, tracking_code? }
export async function PATCH(req: NextRequest) {
  try {
    const { reference, status, tracking_code } = await req.json();
    if (!reference || !status) {
      return NextResponse.json({ message: "Missing reference or status" }, { status: 400 });
    }

    const order = await updateOrderStatus(reference, status, { tracking_code });

    // Send delivery update email for meaningful status changes
    const emailStatuses = ["printing", "ready", "dispatched", "delivered"] as const;
    if (emailStatuses.includes(status)) {
      await sendDeliveryUpdate({
        reference:     order.reference,
        customerName:  order.customer_name,
        customerEmail: order.customer_email,
        status,
        trackingCode:  tracking_code,
      });
    }

    return NextResponse.json({ success: true, order });
  } catch (err) {
    console.error("Status update error:", err);
    return NextResponse.json({ message: "Update failed" }, { status: 500 });
  }
}

