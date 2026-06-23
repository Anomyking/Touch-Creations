import Link from "next/link";
import { Printer, MapPin, Phone, Mail } from "lucide-react";

const productLinks = [
  { label: "Brand my business", href: "/shop/brand-my-business" },
  { label: "Promote an event",  href: "/shop/promote-an-event"  },
  { label: "Dress my team",     href: "/shop/dress-my-team"     },
  { label: "Corporate gifts",   href: "/shop/corporate-gifts"   },
  { label: "Packaging",         href: "/shop/packaging"         },
  { label: "Print & frame",     href: "/shop/print-and-frame"   },
  { label: "Starter bundles",   href: "/#bundles"               },
];

const serviceLinks = [
  { label: "Graphic design",       href: "/services/design"    },
  { label: "Same-day printing",    href: "/services/same-day"  },
  { label: "Bulk & wholesale",     href: "/services/bulk"      },
  { label: "Business accounts",    href: "/business"           },
  { label: "Event day printing",   href: "/services/events"    },
  { label: "Physical proof service", href: "/services/proof"   },
];

const helpLinks = [
  { label: "How to order",      href: "/how-to-order"  },
  { label: "Design templates",  href: "/templates"     },
  { label: "Turnaround times",  href: "/turnaround"    },
  { label: "Delivery & pricing",href: "/delivery"      },
  { label: "FAQs",              href: "/faqs"          },
  { label: "Track my order",    href: "/track"         },
  { label: "Returns & reprints",href: "/returns"       },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-brand-50">
      {/* CTA strip */}
      <div className="bg-brand-700 px-6 py-6">
        <div className="container-main flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="text-white font-medium">Ready to print? Let&apos;s get started.</p>
            <p className="text-brand-400 text-sm mt-1">Same-day printing · Free delivery on orders over KES 7,000</p>
          </div>
          <div className="flex gap-3 shrink-0">
            <Link href="/#products" className="group bg-white text-brand-700 font-medium text-sm px-5 py-2.5 rounded-full hover:bg-brand-300 hover:text-white transition-colors">
              <span className="transition-colors group-hover:text-white">Browse products</span>
            </Link>
            <Link href="/quote" className="border border-brand-500 text-brand-300 text-sm px-5 py-2.5 rounded-full hover:bg-brand-800 transition-colors">
              Get a quote
            </Link>
          </div>
        </div>
      </div>

      {/* Main columns */}
      <div className="container-main py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-brand-700 rounded-lg flex items-center justify-center">
                <Printer size={16} className="text-white" />
              </div>
              <span className="font-semibold text-brand-950 text-lg">Touch creations</span>
            </div>
            <p className="text-sm text-brand-500 leading-relaxed mb-5 max-w-[220px]">
              Nairobi&apos;s premium print house. From business cards to billboard banners — delivered across all 47 counties.
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-2.5">
                <MapPin size={14} className="text-brand-500 mt-0.5 shrink-0" />
                <span className="text-xs text-brand-500">Westlands, Nairobi<br />Mon – Sat, 8 AM – 6 PM</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={14} className="text-brand-500 shrink-0" />
                <a href="tel:+254700000000" className="text-xs text-brand-600 hover:text-brand-800">+254 700 000 000</a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={14} className="text-brand-500 shrink-0" />
                <a href="mailto:hello@Touch creations.co.ke" className="text-xs text-brand-600 hover:text-brand-800">hello@Touch creations.co.ke</a>
              </div>
            </div>
            <div className="flex gap-2 mt-5">
              {["IG","FB","TK"].map((s, i) => (
                <a key={i} href="#" className="w-8 h-8 rounded-lg bg-brand-50 border border-brand-100 flex items-center justify-center hover:bg-brand-300 transition-colors">
                  <span className="text-[10px] font-bold text-brand-600">{s}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <p className="eyebrow mb-4">Products</p>
            <ul className="flex flex-col gap-2">
              {productLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-brand-500 hover:text-brand-800 transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="eyebrow mb-4">Services</p>
            <ul className="flex flex-col gap-2">
              {serviceLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-brand-500 hover:text-brand-800 transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <p className="eyebrow mb-4">Quick help</p>
            <ul className="flex flex-col gap-2">
              {helpLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-brand-500 hover:text-brand-800 transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <div className="bg-brand-50 border-y border-brand-100">
        <div className="container-main py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="text-sm font-medium text-brand-900">Get deals &amp; print tips in your inbox</p>
            <p className="text-xs text-brand-500 mt-1">No spam. New subscribers get 10% off their first order.</p>
          </div>
          <div className="flex gap-2 w-full sm:w-auto">
            <input type="email" placeholder="your@email.com" className="flex-1 sm:w-64 text-sm bg-white border border-brand-200 rounded-full px-4 py-2.5 outline-none focus:border-brand-500 text-brand-900 placeholder:text-brand-400" />
            <button className="bg-brand-700 hover:bg-brand-600 text-white text-sm px-5 py-2.5 rounded-full transition-colors shrink-0">Subscribe</button>
          </div>
        </div>
      </div>

      {/* Trust bar */}
      <div className="border-b border-brand-50">
        <div className="container-main">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-brand-50">
            {[
              { icon: "🚚", title: "Free delivery",    sub: "Orders over KES 7,000" },
              { icon: "⚡", title: "Same-day printing", sub: "Order before 12 PM" },
              { icon: "🛡️", title: "Reprint guarantee", sub: "If it's not right, we redo it" },
              { icon: "📍", title: "All 47 counties",   sub: "Kenya-wide delivery" },
            ].map((t) => (
              <div key={t.title} className="flex items-center gap-3 px-6 py-5">
                <span className="text-xl">{t.icon}</span>
                <div>
                  <p className="text-xs font-medium text-brand-800">{t.title}</p>
                  <p className="text-xs text-brand-400 mt-0.5">{t.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="container-main">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 py-5 text-xs text-brand-400">
          <p>© 2026 <span className="text-brand-600 font-medium">Touch creations</span>. All rights reserved. Proudly Kenyan.</p>
          <div className="flex gap-5 items-center">
            <Link href="/privacy" className="hover:text-brand-700">Privacy policy</Link>
            <Link href="/terms"   className="hover:text-brand-700">Terms of service</Link>
            <Link href="/admin"   className="text-brand-300 hover:text-brand-700 flex items-center gap-1.5">
              <span>🔐</span> Staff login
            </Link>
          </div>
          <div className="flex gap-2">
            {["M-Pesa", "Visa", "Mastercard"].map((p) => (
              <span key={p} className="bg-brand-50 border border-brand-100 rounded px-2 py-1 text-brand-500">{p}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

