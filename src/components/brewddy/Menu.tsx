import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Item = {
  name: string;
  blurb: string;
  price: string;
  tag?: string;
  hue: string; // tailwind gradient classes for the "cup"
  size: "lg" | "md" | "sm";
};

const items: Item[] = [
  {
    name: "Vanilla Hazel",
    blurb: "Smooth vanilla, toasted hazelnut, zero regrets. The morning ritual that hits different.",
    price: "₱149",
    tag: "Bestseller",
    hue: "from-[hsl(34,55%,72%)] to-[hsl(28,45%,45%)]",
    size: "lg",
  },
  {
    name: "Salted Caramel",
    blurb: "Burnt sugar swirl with a pinch of sea salt. Panalo in a cup.",
    price: "₱159",
    tag: "Cult Pick",
    hue: "from-[hsl(28,70%,55%)] to-[hsl(20,75%,25%)]",
    size: "md",
  },
  {
    name: "Steeped Coffee",
    blurb: "Slow-brewed, deep-bodied, never bitter. For the purists.",
    price: "₱129",
    hue: "from-[hsl(24,55%,28%)] to-[hsl(20,90%,8%)]",
    size: "md",
  },
  {
    name: "Brahma Balls",
    blurb: "Rich espresso-rolled bites. Solid energy, not too sweet.",
    price: "₱99",
    tag: "New",
    hue: "from-[hsl(22,40%,30%)] to-[hsl(18,80%,12%)]",
    size: "lg",
  },
];

const Cup = ({ hue, name }: { hue: string; name: string }) => (
  <div className="relative aspect-square w-full max-w-[280px] mx-auto">
    <div className="absolute inset-0 rounded-full border border-espresso/15" />
    <div className={cn("absolute inset-3 rounded-full bg-gradient-to-br shadow-warm overflow-hidden", hue)}>
      <div
        className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse at 35% 28%, hsl(36 55% 94% / 0.35), transparent 55%)" }}
      />
      <div className="absolute inset-x-8 inset-y-10 rounded-full bg-gradient-to-br from-[hsl(20,80%,10%)] to-[hsl(24,40%,18%)] opacity-60" />
    </div>
    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-cream text-espresso px-4 py-1 rounded-full text-[10px] tracking-[0.25em] uppercase shadow-warm whitespace-nowrap">
      {name}
    </div>
  </div>
);

const Card = ({ item }: { item: Item }) => {
  const span =
    item.size === "lg" ? "md:col-span-7" : item.size === "md" ? "md:col-span-5" : "md:col-span-4";
  return (
    <article
      className={cn(
        "group reveal relative bg-cream rounded-3xl p-8 md:p-10 border border-espresso/5 hover:shadow-lift hover:-translate-y-2 transition-all duration-500 overflow-hidden",
        span,
      )}
    >
      {item.tag && (
        <span className="absolute top-6 right-6 bg-forest text-cream text-[10px] tracking-[0.2em] uppercase px-3 py-1 rounded-full">
          {item.tag}
        </span>
      )}
      <div className="grid grid-cols-5 gap-6 items-center">
        <div className="col-span-2">
          <Cup hue={item.hue} name={item.name} />
        </div>
        <div className="col-span-3">
          <h3 className="font-display text-espresso text-3xl md:text-4xl font-semibold leading-tight">
            {item.name}
          </h3>
          <p className="mt-3 text-espresso/65 text-sm md:text-base leading-relaxed">{item.blurb}</p>
          <div className="mt-6 flex items-center justify-between">
            <span className="font-display text-2xl text-caramel font-bold">{item.price}</span>
            <span className="text-espresso/40 text-xs tracking-[0.25em] uppercase group-hover:text-caramel transition-colors">
              Order →
            </span>
          </div>
        </div>
      </div>
    </article>
  );
};

export const Menu = () => {
  return (
    <section id="menu" className="bg-gradient-cream py-24 md:py-36 relative">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div className="reveal">
            <div className="text-caramel text-xs tracking-[0.3em] uppercase mb-5">The Lineup</div>
            <h2 className="font-display text-espresso text-5xl md:text-7xl leading-[0.95] font-semibold max-w-2xl">
              The lineup that <span className="italic font-light">started</span> the cult.
            </h2>
          </div>
          <p className="text-espresso/60 max-w-sm reveal">
            Four signatures. Zero filler. Each one tested by the most demanding regulars in town —
            and approved with extra love.
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-6 md:gap-8">
          {items.map((it) => (
            <Card key={it.name} item={it} />
          ))}
        </div>

        <div className="text-center mt-16 reveal">
          <Button variant="ghostEspresso" size="lg" asChild>
            <a href="#order">
              Full Menu <ArrowRight />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
