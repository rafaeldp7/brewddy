import { Coffee, Zap, Handshake } from "lucide-react";

const items = [
  {
    icon: Coffee,
    title: "Arabica All the Way",
    body: "Every drink uses premium Arabica beans, dialed in to hit different. No shortcuts, no fillers.",
  },
  {
    icon: Zap,
    title: "Seriously Effective",
    body: "Real customers report staying wired all day. One cup, full energy. You've been warned.",
  },
  {
    icon: Handshake,
    title: "Balanced, Not Boring",
    body: "Not too sweet. Not too strong. Just sakto for every palate — beginner to caffeine veteran.",
  },
];

export const Why = () => {
  return (
    <section className="bg-forest grain-overlay py-24 md:py-32 text-cream relative">
      <div className="container relative z-10">
        <div className="max-w-2xl mb-16 reveal">
          <div className="text-caramel-glow text-xs tracking-[0.3em] uppercase mb-5">Why BRewddy</div>
          <h2 className="font-display text-5xl md:text-6xl leading-[0.95] font-semibold">
            Three reasons we keep <span className="italic font-light">selling out.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10 md:gap-14">
          {items.map(({ icon: Icon, title, body }, i) => (
            <div key={title} className="reveal" style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="w-16 h-16 rounded-full bg-caramel/15 border border-caramel/30 flex items-center justify-center mb-6">
                <Icon className="size-7 text-caramel-glow" />
              </div>
              <h3 className="font-display text-2xl md:text-3xl mb-3">{title}</h3>
              <p className="text-cream/70 leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
