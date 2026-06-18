"use client";

import { useState } from "react";

const faqs = [
  { q: "How do I place an order?", a: "Browse products on our website, choose your specs, upload your design and pay via M-Pesa or card. Prefer WhatsApp? Send us your details on +254 700 000 000 and we'll walk you through it. Orders are confirmed within 1 hour during business hours." },
  { q: "What is the minimum order quantity?", a: "Business cards start from 50 pieces, flyers from 100 pieces, and t-shirts from 5 pieces. Stickers and labels can be ordered from as few as 10 pieces. Need fewer? Get in touch and we'll see what we can do." },
  { q: "Can I request a sample before a bulk order?", a: "Yes — we offer a physical proof service for orders above KES 30,000. You receive one printed sample before we run the full job so you can approve colour, finish, and sizing. Sample fee is KES 500, credited back to your final order." },
  { q: "What file format should I send my design in?", a: "We accept PDF, AI, PSD, and high-resolution PNG/JPG files (minimum 300 DPI). For best results, send PDF with bleed and crop marks. Not sure? Use our design templates — pre-set to the correct dimensions for every product." },
  { q: "Do you offer a design service?", a: "Yes. Our in-house design team can create your artwork from scratch. Design fees start from KES 1,500 depending on complexity. All design orders include 3 free revisions. Design is free when you order any of our starter bundles." },
  { q: "How long does delivery take?", a: "Nairobi same-day collection is available for orders placed before 12 PM. Standard Nairobi delivery takes 1–2 business days. Countrywide delivery via courier takes 2–4 business days depending on location." },
  { q: "Do you deliver outside Nairobi?", a: "Yes — we deliver to all 47 counties across Kenya via trusted courier partners. Delivery fee is KES 850 outside Nairobi. Orders above KES 7,000 qualify for free delivery countrywide." },
  { q: "How can I pay?", a: "We accept M-Pesa, Visa, Mastercard, and direct bank transfer. Business accounts can be invoiced monthly with 30-day payment terms after credit approval." },
  { q: "What if my order arrives damaged or incorrect?", a: "We stand behind every job. If your order arrives damaged, misprinted, or doesn't match what you approved — we'll reprint it at no charge. Simply contact us within 48 hours of delivery with a photo." },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faqs" className="bg-brand-50 py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-xs font-medium tracking-widest uppercase text-brand-500 mb-3">Got questions?</p>
          <h2 className="text-2xl sm:text-3xl font-medium text-brand-950">Frequently asked questions</h2>
          <p className="text-sm text-brand-500 mt-3">Everything you need to know before placing your order</p>
        </div>

        <div className="flex flex-col gap-2">
          {faqs.map((faq, i) => (
            <div key={i} className={`bg-white border rounded-2xl overflow-hidden transition-colors ${open === i ? "border-brand-400" : "border-brand-100 hover:border-brand-200"}`}>
              <button
                className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="text-sm font-medium text-brand-900">{faq.q}</span>
                <span className={`text-brand-500 text-lg transition-transform duration-200 shrink-0 ${open === i ? "rotate-45" : ""}`}>+</span>
              </button>
              {open === i && (
                <div className="px-6 pb-5">
                  <div className="h-px bg-brand-50 mb-4" />
                  <p className="text-sm text-brand-600 leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Still need help */}
        <div className="mt-8 bg-white border border-brand-100 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="text-sm font-medium text-brand-900">Still have a question?</p>
            <p className="text-xs text-brand-500 mt-1">Our team replies within 30 minutes · Mon – Sat, 8 AM – 6 PM</p>
          </div>
          <div className="flex gap-3 shrink-0">
            <a href="https://wa.me/254700000000" className="inline-flex items-center gap-2 bg-brand-700 hover:bg-brand-600 text-white text-sm font-medium px-5 py-2.5 rounded-full transition-colors">
              💬 WhatsApp us
            </a>
            <a href="tel:+254700000000" className="inline-flex items-center gap-2 border border-brand-100 hover:border-brand-300 text-brand-600 text-sm px-5 py-2.5 rounded-full transition-colors">
              📞 Call us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

