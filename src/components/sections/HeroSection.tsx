"use client";

import Link from "next/link";
import { categories } from "@/data";
import WorkTicker from "./WorkTicker";
import QuoteBento from "./QuoteBento";

type BentoItem = {
  id:          string;
  name:        string;
  href:        string;
  description: string;
  emoji:       string;
  bgClass:     string;
  badge:       string;        // top-right pill text (e.g. "9 products", "Service")
  featured?:   { label: string; pulse?: boolean };  // bottom-left badge (e.g. "Most ordered", "New")
};

const categoryVisuals: Record<string, { emoji: string; bgClass: string }> = {
  "brand":     { emoji: "🏷️", bgClass: "bg-brand-800" },
  "events":    { emoji: "📣", bgClass: "bg-brand-700" },
  "apparel":   { emoji: "👕", bgClass: "bg-brand-900" },
  "gifts":     { emoji: "🎁", bgClass: "bg-brand-800" },
  "packaging": { emoji: "📦", bgClass: "bg-brand-900" },
  "print":     { emoji: "🖼️", bgClass: "bg-brand-800" },
};

const stats = [
  { number: "500+",  label: "Happy clients"    },
  { number: "54",    label: "Products"         },
  { number: "47",    label: "Counties covered" },
  { number: "1 day", label: "Turnaround"       },
];

const trust = [
  { icon: "🚚", title: "Free delivery",     sub: "Orders over KES 7,000"         },
  { icon: "⚡", title: "Same-day printing", sub: "Order before 12 PM"             },
  { icon: "📱", title: "Pay via M-Pesa",    sub: "Instant & secure"               },
  { icon: "🛡️", title: "Reprint guarantee", sub: "If it's not right, we redo it"  },
];

export default function HeroSection() {
  // Build a single ordered list — categories first, then design services as #7 and #8.
  // Both render with the EXACT same card markup below.
  const bentoItems: BentoItem[] = [
    ...categories.map<BentoItem>((cat, i) => {
      const v = categoryVisuals[cat.id] ?? { emoji: "🖨️", bgClass: "bg-brand-900" };
      return {
        id:          cat.id,
        name:        cat.name,
        href:        `/shop/${cat.slug}`,
        description: cat.description,
        emoji:       v.emoji,
        bgClass:     v.bgClass,
        badge:       `${cat.productCount} products`,
        featured:    i === 0 ? { label: "Most ordered" } : undefined,
      };
    }),
    {
      id:          "graphic-design",
      name:        "Graphic design",
      href:        "/services/design",
      description: "Logos, brand identity & social media",
      emoji:       "🎨",
      bgClass:     "bg-brand-700",
      badge:       "Service",
    },
    {
      id:          "web-design",
      name:        "Web design",
      href:        "/services/web",
      description: "Fast Kenyan sites with M-Pesa built in",
      emoji:       "💻",
      bgClass:     "bg-brand-900",
      badge:       "Service",
      featured:    { label: "New", pulse: true },
    },
  ];

  return (
    <section className="bg-brand-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-0">

        {/* Bento grid — 2 cols on mobile, 4 cols on desktop, 8 cards = 2 clean rows of 4 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-4">
          {bentoItems.map((item, i) => (
            <Link
              key={item.id}
              href={item.href}
              className={`relative group flex flex-col justify-between rounded-2xl border border-brand-800 ${item.bgClass} p-4 overflow-hidden hover:border-brand-500 transition-all duration-200 min-h-[150px]`}
            >
              {/* Big watermark number */}
              <div className="absolute top-2 right-3 text-6xl font-bold text-white/[0.04] select-none leading-none pointer-events-none">
                {String(i + 1).padStart(2, "0")}
              </div>

              {/* Top row: icon + badge */}
              <div className="flex items-start justify-between relative z-10">
                <div className="w-9 h-9 rounded-xl bg-black/20 flex items-center justify-center text-lg">
                  {item.emoji}
                </div>
                <span className="text-[10px] font-medium bg-black/20 text-brand-400 rounded-full px-2.5 py-1">
                  {item.badge}
                </span>
              </div>

              {/* Bottom: title + description + CTA */}
              <div className="relative z-10">
                {item.featured && (
                  <span className="inline-flex items-center gap-1.5 bg-brand-600 text-brand-950 text-[10px] font-medium rounded-full px-2.5 py-1 mb-2">
                    <span className={`w-1.5 h-1.5 rounded-full bg-brand-300 inline-block ${item.featured.pulse ? "animate-pulse" : ""}`} />
                    {item.featured.label}
                  </span>
                )}
                <p className="text-sm font-medium text-brand-300">{item.name}</p>
                <p className="text-[11px] text-brand-500 mt-1 leading-relaxed">{item.description}</p>
                <p className="text-[11px] text-brand-600 mt-2 group-hover:text-brand-400 transition-colors">
                  {item.badge === "Service" ? "Learn more" : "Shop now"} →
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Work ticker — full width below the bento */}
        <div className="hidden md:block mb-4 min-h-[140px]">
          <WorkTicker />
        </div>

        {/* Custom quote bento */}
        <QuoteBento />

        {/* Headline + CTAs */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end py-10 border-t border-brand-900">
          <div>
            <p className="text-xs font-medium tracking-widest uppercase text-brand-900 mb-4">
              Nairobi&apos;s premium print house
            </p>
            <h1 className="text-3xl sm:text-4xl font-medium text-brand-950 leading-tight mb-4">
              Print that makes your brand{" "}
              <span className="bg-brand-800 text-white px-2 py-0.5 rounded-lg">
                impossible to ignore
              </span>
            </h1>
            <p className="text-sm text-brand-900 leading-relaxed max-w-md">
              From same-day <span className="text-brand-950 font-medium">business cards</span> to
              large-format <span className="text-brand-950 font-medium">event banners</span> and{" "}
              <span className="text-brand-950 font-medium">branded apparel</span> — precision
              printing delivered across all 47 counties.
            </p>
          </div>
          <div className="flex flex-col items-start lg:items-end gap-6">
            <div className="flex gap-6">
              {stats.map((s) => (
                <div key={s.label} className="text-right">
                  <p className="text-xl font-medium text-black">{s.number}</p>
                  <p className="text-[11px] text-black">{s.label}</p>
                </div>
              ))}
            </div>
            <div className="flex gap-3">
              <Link href="/#products" className="inline-flex items-center gap-2 bg-brand-800 hover:bg-brand-700 text-white text-sm font-medium px-6 py-3 rounded-full transition-colors">
                Browse all products
              </Link>
              <Link href="/quote" className="inline-flex items-center gap-2 border border-brand-900 hover:border-brand-800 text-brand-950 hover:text-brand-900 text-sm px-6 py-3 rounded-full transition-colors">
                Get a free quote
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Trust bar */}
      <div className="border-t border-brand-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-brand-900">
            {trust.map((t) => (
              <div key={t.title} className="flex items-center gap-3 px-4 py-5">
                <span className="text-xl">{t.icon}</span>
                <div>
                  <p className="text-xs font-medium text-black">{t.title}</p>
                  <p className="text-[11px] text-black mt-0.5">{t.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

