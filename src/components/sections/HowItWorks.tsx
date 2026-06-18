const steps = [
  {
    number: "01",
    emoji: "🎨",
    title: "Choose & customise",
    description: "Browse 54 products, pick your specs — size, quantity, finish. Upload your design or let our team create one for you.",
    detail: "Free design on all starter bundles",
  },
  {
    number: "02",
    emoji: "🖨️",
    title: "We print with precision",
    description: "Your order goes straight to our Nairobi press. We check every file before printing and send you a proof to approve.",
    detail: "Same-day printing available",
  },
  {
    number: "03",
    emoji: "🚀",
    title: "Delivered to you",
    description: "Collect from our Westlands studio or we deliver via courier — anywhere in Kenya within 1–4 business days.",
    detail: "All 47 counties covered",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs font-medium tracking-widest uppercase text-brand-500 mb-3">
            Simple process
          </p>
          <h2 className="text-2xl sm:text-3xl font-medium text-brand-950">
            How it works
          </h2>
          <p className="text-sm text-brand-500 mt-3 max-w-md mx-auto">
            From upload to delivery in 3 steps — no confusion, no chasing
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">

          {/* Connector line — desktop only */}
          <div className="hidden md:block absolute top-10 left-1/6 right-1/6 h-px bg-gradient-to-r from-transparent via-brand-100 to-transparent" />

          {steps.map((step, i) => (
            <div
              key={step.number}
              className="relative flex flex-col items-center text-center group"
            >
              {/* Number bubble */}
              <div className="relative mb-6">
                <div className="w-20 h-20 rounded-2xl bg-brand-950 flex flex-col items-center justify-center shadow-lg">
                  <span className="text-2xl mb-0.5">{step.emoji}</span>
                  <span className="text-[10px] font-medium text-brand-500">{step.number}</span>
                </div>
                {/* Arrow connector */}
                {i < steps.length - 1 && (
                  <div className="hidden md:flex absolute -right-10 top-1/2 -translate-y-1/2 items-center">
                    <div className="w-8 h-px bg-brand-100" />
                    <div className="text-brand-200 text-xs">›</div>
                  </div>
                )}
              </div>

              {/* Content card */}
              <div className="bg-brand-50 border border-brand-100 rounded-2xl p-6 w-full group-hover:border-brand-300 transition-colors">
                <h3 className="text-base font-medium text-brand-900 mb-3">{step.title}</h3>
                <p className="text-sm text-brand-600 leading-relaxed mb-4">{step.description}</p>
                <div className="inline-flex items-center gap-2 bg-white border border-brand-200 rounded-full px-3 py-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-500 inline-block" />
                  <span className="text-xs text-brand-600 font-medium">{step.detail}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 text-center">
          <a
            href="/how-to-order"
            className="text-sm text-brand-600 hover:text-brand-800 underline underline-offset-4 transition-colors"
          >
            Read the full guide →
          </a>
        </div>
      </div>
    </section>
  );
}

