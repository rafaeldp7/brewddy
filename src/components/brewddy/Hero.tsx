import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section
      id="top"
      className="relative min-h-screen overflow-hidden bg-gradient-espresso grain-overlay flex items-center pt-28 pb-20"
    >
      {/* radial warm glow */}
      <div className="absolute -top-20 -left-20 w-[60vw] h-[60vw] rounded-full opacity-60 blur-3xl"
        style={{ background: "radial-gradient(circle, hsl(24 60% 51% / 0.35), transparent 60%)" }}
      />
      <div className="absolute bottom-0 right-0 w-[50vw] h-[50vw] rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle, hsl(113 21% 30% / 0.5), transparent 60%)" }}
      />

      {/* Floating cult badge */}
      <div className="absolute top-32 right-6 md:right-16 z-20 animate-float-slow">
        <div className="relative w-28 h-28 md:w-36 md:h-36">
          <div className="absolute inset-0 rounded-full border border-caramel/40 animate-spin-slow flex items-center justify-center">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <defs>
                <path id="circle" d="M 100,100 m -75,0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0" />
              </defs>
              <text className="fill-cream/80" style={{ fontSize: "16px", letterSpacing: "6px", fontFamily: "Inter" }}>
                <textPath href="#circle">CULT FAVORITE ✦ EST. 2025 ✦ </textPath>
              </text>
            </svg>
          </div>
          <div className="absolute inset-6 rounded-full bg-caramel flex items-center justify-center text-cream font-display text-xl md:text-2xl shadow-caramel">
            ✦
          </div>
        </div>
      </div>

      <div className="container relative z-10">
        <div className="max-w-5xl">
          <div className="inline-flex items-center gap-2 mb-8 text-caramel text-xs tracking-[0.3em] uppercase">
            <span className="block w-10 h-px bg-caramel" />
            Filipino Coffee
          </div>

          <h1 className="font-display text-cream leading-[0.92] text-[14vw] sm:text-[11vw] md:text-[8.5rem] lg:text-[10rem] font-semibold">
            Your day's <br />
            <span className="italic font-light">best</span>{" "}
            <span className="text-gradient-caramel font-bold">friend.</span>
          </h1>

          <p className="mt-10 max-w-xl text-cream/70 text-lg md:text-xl leading-relaxed">
            BRewddy is the cup that turns first-timers into regulars. Crafted with intent.
            Served with energy. <span className="text-caramel">Sarap, legit.</span>
          </p>

          <div className="mt-12 flex flex-wrap gap-4">
            <Button variant="caramel" size="xl" asChild>
              <a href="#menu">
                See Our Menu <ArrowRight className="ml-1" />
              </a>
            </Button>
            <Button variant="ghostCream" size="xl" asChild>
              <a href="#story">Our Story</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cream/50 text-xs tracking-[0.3em] uppercase z-10 hidden md:flex flex-col items-center gap-2">
        <span>Scroll</span>
        <span className="w-px h-10 bg-cream/30" />
      </div>
    </section>
  );
};
