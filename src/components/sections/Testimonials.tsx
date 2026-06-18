const testimonials = [
  { name: "Wanjiku M.", role: "Founder, Bloom Florist", quote: "Ordered 500 business cards and 100 flyers on a Thursday morning — had them by 5 PM the same day. Quality was exceptional and the design team nailed our brand colours.", rating: 5 },
  { name: "James O.", role: "Marketing Manager, TechBridge Kenya", quote: "We use Touch creations for all our corporate events. Roll-up banners, branded tees, notebooks — everything is consistent and always on time. They're the only printer we trust.", rating: 5 },
  { name: "Amina H.", role: "Owner, Amina's Kitchen", quote: "The packaging stickers and kraft bags completely transformed how my products look. Customers keep commenting on the branding. Worth every shilling.", rating: 5 },
  { name: "Peter K.", role: "Event Organiser, Nairobi Events Co.", quote: "Ordered backdrop banners for a corporate event with 48 hours notice. They delivered on time with zero errors. Will absolutely use again.", rating: 5 },
  { name: "Grace N.", role: "Director, Sunrise Academy", quote: "Printed branded t-shirts and caps for our school team. The embroidery quality is top notch and turnaround was 3 days. Very impressed.", rating: 5 },
  { name: "David M.", role: "CEO, Savanna Organics", quote: "The product seller bundle was perfect for our launch. Labels, bags and business cards all matched perfectly. The free design service saved us so much time.", rating: 5 },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-xs font-medium tracking-widest uppercase text-brand-500 mb-3">Customer reviews</p>
          <h2 className="text-2xl sm:text-3xl font-medium text-brand-950">What our clients say</h2>
          <div className="flex items-center justify-center gap-2 mt-3">
            <div className="flex gap-0.5">{Array(5).fill(0).map((_, i) => <span key={i} className="text-yellow-400 text-sm">★</span>)}</div>
            <span className="text-sm text-brand-500">5.0 from 200+ reviews</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-brand-50 border border-brand-100 rounded-2xl p-6 hover:border-brand-300 transition-colors">
              <div className="flex gap-0.5 mb-4">
                {Array(t.rating).fill(0).map((_, i) => <span key={i} className="text-yellow-400 text-sm">★</span>)}
              </div>
              <p className="text-sm text-brand-700 leading-relaxed mb-5">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-3 pt-4 border-t border-brand-100">
                <div className="w-8 h-8 rounded-full bg-brand-700 flex items-center justify-center text-white text-xs font-bold">
                  {t.name[0]}
                </div>
                <div>
                  <p className="text-xs font-medium text-brand-900">{t.name}</p>
                  <p className="text-[11px] text-brand-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

