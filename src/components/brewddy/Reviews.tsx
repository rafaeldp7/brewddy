import { Star } from "lucide-react";

const reviews = [
  {
    quote: "Vanilla Hazel first thing in the morning? ON TOP. Nothing compares.",
    author: "Rafael D.P.",
    role: "Vanilla Hazel loyalist",
  },
  {
    quote:
      "The Arabica is perfectly balanced — not bitter, not too strong. Exactly what a coffee lover needs. Brahma Balls? Solid. Not overly sweet. Will 100% order again.",
    author: "Rose L.",
    role: "Self-confessed coffee snob",
  },
  {
    quote: "One cup and I was energized the entire day. 10/10, no notes.",
    author: "Jefferson C.",
    role: "Daily regular",
  },
];

export const Reviews = () => {
  return (
    <section id="reviews" className="bg-espresso grain-overlay py-24 md:py-36 text-cream relative">
      <div className="container relative z-10">
        <div className="text-center mb-16 reveal">
          <div className="text-caramel text-xs tracking-[0.3em] uppercase mb-5">Customer Love</div>
          <h2 className="font-display text-5xl md:text-7xl leading-[0.95] font-semibold max-w-3xl mx-auto">
            Don't take <span className="italic font-light">our</span> word for it.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {reviews.map((r, i) => (
            <figure
              key={i}
              className="reveal group bg-cream text-espresso rounded-3xl p-8 md:p-10 hover:scale-[1.02] hover:shadow-lift transition-all duration-500 flex flex-col"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="flex gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="size-4 fill-caramel text-caramel" />
                ))}
              </div>
              <blockquote className="font-display text-xl md:text-2xl leading-snug flex-1">
                "{r.quote}"
              </blockquote>
              <figcaption className="mt-8 pt-6 border-t border-espresso/10">
                <div className="font-semibold">{r.author}</div>
                <div className="text-espresso/55 text-sm">{r.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};
