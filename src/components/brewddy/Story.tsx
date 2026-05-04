export const Story = () => {
  return (
    <section id="story" className="bg-cream py-24 md:py-36 relative overflow-hidden">
      <div className="container grid md:grid-cols-12 gap-12 md:gap-20 items-center">
        <div className="md:col-span-7 reveal">
          <div className="text-caramel text-xs tracking-[0.3em] uppercase mb-6">Our Story</div>
          <h2 className="font-display text-espresso text-5xl md:text-7xl lg:text-8xl leading-[0.95] font-semibold">
            Brewed with intent. <br />
            <span className="italic font-light">Made for friends.</span>
          </h2>
          <p className="mt-8 text-espresso/70 text-lg md:text-xl max-w-xl leading-relaxed">
            BRewddy was born out of a simple belief — great coffee shouldn't be complicated or cold.
            Every cup is crafted with care, personality, and the kind of warmth that turns first-timers
            into regulars.
          </p>

          <div className="mt-12 grid grid-cols-2 gap-6 max-w-lg">
            <div className="border-l-2 border-caramel pl-5">
              <div className="font-display text-5xl md:text-6xl text-espresso font-bold">100%</div>
              <div className="text-espresso/60 text-sm mt-2 tracking-wide">Premium Arabica beans, every cup.</div>
            </div>
            <div className="border-l-2 border-forest pl-5">
              <div className="font-display text-5xl md:text-6xl text-espresso font-bold">0%</div>
              <div className="text-espresso/60 text-sm mt-2 tracking-wide">Pretension. Just real, honest coffee.</div>
            </div>
          </div>
        </div>

        {/* Abstract coffee artwork */}
        <div className="md:col-span-5 reveal relative">
          <div className="relative aspect-square max-w-md mx-auto">
            {/* Outer ring */}
            <div className="absolute inset-0 rounded-full border border-espresso/15 animate-spin-slow" />
            {/* Bean shape */}
            <div className="absolute inset-6 rounded-full bg-gradient-espresso shadow-lift overflow-hidden grain-overlay">
              <div className="absolute inset-0" style={{ background: "radial-gradient(circle at 30% 30%, hsl(24 60% 51% / 0.5), transparent 60%)" }} />
              {/* Coffee surface */}
              <div className="absolute inset-x-10 inset-y-14 rounded-full bg-gradient-to-br from-[hsl(24,55%,28%)] to-[hsl(20,80%,12%)] shadow-inner">
                <div className="absolute inset-0 rounded-full" style={{ background: "radial-gradient(ellipse at 35% 30%, hsl(36 55% 94% / 0.25), transparent 50%)" }} />
                {/* Steam */}
                <div className="absolute -top-12 left-1/2 -translate-x-1/2 flex gap-2">
                  <div className="w-1 h-10 bg-cream/40 rounded-full animate-steam" style={{ animationDelay: "0s" }} />
                  <div className="w-1 h-10 bg-cream/40 rounded-full animate-steam" style={{ animationDelay: "0.6s" }} />
                  <div className="w-1 h-10 bg-cream/40 rounded-full animate-steam" style={{ animationDelay: "1.2s" }} />
                </div>
              </div>
            </div>
            {/* Floating tag */}
            <div className="absolute -bottom-4 -left-4 bg-forest text-cream px-5 py-3 rounded-full text-xs tracking-[0.2em] uppercase shadow-warm">
              Crafted Daily
            </div>
            <div className="absolute -top-2 -right-2 bg-caramel text-cream w-20 h-20 rounded-full flex items-center justify-center font-display text-2xl shadow-caramel rotate-12">
              ✦
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
