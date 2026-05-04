import { Star } from "lucide-react";

const reviews = [
  {
    quote: "Salted Caramel pa lang natikman ko tol. Panalo! Tikman ko tong iba bukas.",
    author: "Rafael D.P.",
    role: "Vanilla Hazel loyalist",
  },
  {
    quote:
      "Napaka sarap at lasang-lasa talaga yung Arabica na kape perfect para sa tulad kong coffee lover. Ang sarap ng timpla, hindi mapait at hindi sobrang tapang, sakto lang sa panlasa. Thank you so much Brewddy!!",
    author: "Rose L.",
    role: "Self-confessed coffee snob",
  },
  {
    quote: "grabe yung coffee, bes very effective kapag need mo pagpuyat waaa 10/10. hanggang ngayon ang energy ko jusq",
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
