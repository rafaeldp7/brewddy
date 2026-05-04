import { ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export const CTA = () => {
  return (
    <section id="order" className="relative bg-gradient-espresso grain-overlay py-28 md:py-40 overflow-hidden">
      <div
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] rounded-full opacity-50 blur-3xl"
        style={{ background: "radial-gradient(circle, hsl(24 60% 51% / 0.4), transparent 60%)" }}
      />
      <div className="container relative z-10 text-center max-w-3xl">
        <div className="text-caramel text-xs tracking-[0.3em] uppercase mb-6 reveal">Ready?</div>
        <h2 className="font-display text-cream text-5xl md:text-7xl lg:text-8xl leading-[0.95] font-semibold reveal">
          Ready for your <br />
          <span className="text-gradient-caramel italic">new favorite</span> cup?
        </h2>
        <p className="mt-8 text-cream/70 text-lg md:text-xl reveal">
          Order now or find us near you. Either way — your day's about to get noticeably better.
        </p>
        <div className="mt-12 flex flex-wrap gap-4 justify-center reveal">
          <Button variant="caramel" size="xl" onClick={() => window.open("https://www.facebook.com/brewddy", "_blank")}>
            <span className="inline-flex items-center gap-2">
              Order Now <ArrowRight className="size-4" />
            </span>
          </Button>
          <Button variant="ghostCream" size="xl" onClick={() => window.open("https://maps.app.goo.gl/NGBU92WujyPaAxfb8", "_blank")}>
            <span className="inline-flex items-center gap-2">
              <MapPin className="size-4" /> Find Us
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};
