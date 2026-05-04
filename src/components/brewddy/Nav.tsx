import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { cn } from "@/lib/utils";

const links = [
  { href: "#menu", label: "Menu" },
  { href: "#story", label: "Our Story" },
  { href: "#reviews", label: "Reviews" },
  { href: "#order", label: "Order" },
];

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled ? "bg-espresso/85 backdrop-blur-xl border-b border-cream/10 py-3" : "bg-transparent py-5",
      )}
    >
      <div className="container flex items-center justify-between">
        <Logo />
        <nav className="hidden md:flex items-center gap-9">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-cream/80 hover:text-caramel text-sm tracking-wide transition-colors relative group"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-caramel transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a
            href="#order"
            className="bg-caramel text-cream px-5 py-2 rounded-full text-sm tracking-wide hover:bg-caramel-glow transition-colors"
          >
            Order Now
          </a>
        </nav>

        <button
          className="md:hidden text-cream p-2"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="size-6" />
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={cn(
          "fixed inset-0 z-50 md:hidden transition-opacity duration-300",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        )}
      >
        <div className="absolute inset-0 bg-espresso/70" onClick={() => setOpen(false)} />
        <aside
          className={cn(
            "absolute right-0 top-0 h-full w-[78%] max-w-sm bg-espresso-deep grain-overlay border-l border-cream/10 transition-transform duration-500",
            open ? "translate-x-0" : "translate-x-full",
          )}
        >
          <div className="relative z-10 flex flex-col h-full p-7">
            <div className="flex items-center justify-between">
              <Logo />
              <button onClick={() => setOpen(false)} className="text-cream p-2" aria-label="Close menu">
                <X className="size-6" />
              </button>
            </div>
            <nav className="flex flex-col gap-1 mt-12">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="font-display text-4xl text-cream hover:text-caramel py-3 border-b border-cream/10 transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </nav>
            <a
              href="#order"
              onClick={() => setOpen(false)}
              className="mt-auto bg-caramel text-cream text-center py-4 rounded-full tracking-wide"
            >
              Order Now
            </a>
          </div>
        </aside>
      </div>
    </header>
  );
};
