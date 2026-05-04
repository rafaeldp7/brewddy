import { Coffee } from "lucide-react";

const quotes = [
  "On top! Vanilla Hazel hits different first thing in the morning 🔥",
  "Salted Caramel — panalo. Coming back tomorrow.",
  "Legit feels like you're sipping high-end Starbucks.",
  "Perfect Arabica — hindi mapait, hindi malakas. Sakto lang. 10/10.",
  "One cup and I was wired the whole day. 10/10 energy.",
];

export const Marquee = () => {
  const items = [...quotes, ...quotes];
  return (
    <section className="bg-espresso-deep border-y border-cream/10 py-5 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap gap-10">
        {items.map((q, i) => (
          <div key={i} className="flex items-center gap-10 text-cream/80 text-sm md:text-base font-medium">
            <span className="italic font-display text-base md:text-lg">"{q}"</span>
            <Coffee className="size-4 text-caramel shrink-0" />
          </div>
        ))}
      </div>
    </section>
  );
};
