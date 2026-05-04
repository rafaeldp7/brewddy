import { Instagram, Facebook } from "lucide-react";
import { Logo } from "./Logo";

export const Footer = () => {
  return (
    <footer className="bg-espresso-deep text-cream pt-20 pb-10 border-t border-cream/10">
      <div className="container grid md:grid-cols-3 gap-12 items-start">
        <div>
          <Logo />
          <p className="mt-4 text-cream/60 max-w-xs">Your day's best friend. Crafted with intent, served with energy.</p>
        </div>
        <nav className="flex flex-wrap gap-x-8 gap-y-3 md:justify-center text-cream/80 text-sm tracking-wide">
          <a href="#menu" className="hover:text-caramel transition-colors">Menu</a>
          <a href="#story" className="hover:text-caramel transition-colors">Our Story</a>
          <a href="#order" className="hover:text-caramel transition-colors">Contact</a>
          <a href="https://instagram.com/rafdlpz" className="hover:text-caramel transition-colors inline-flex items-center gap-1.5">
            <Instagram className="size-4" /> Instagram
          </a>
          <a href="https://facebook.com/rafaeldp07" className="hover:text-caramel transition-colors inline-flex items-center gap-1.5">
            <Facebook className="size-4" /> Facebook
          </a>
        </nav>
        <div className="md:text-right text-cream/50 text-sm">
          <div>8th Avenue, Caloocan City, Philippines</div>
          <div className="mt-1">https://www.facebook.com/brewddy</div>
        </div>
      </div>
      <div className="container mt-14 pt-6 border-t border-cream/10 text-cream/40 text-xs flex flex-wrap gap-3 justify-between">
        <span>© 2025 BRewddy. Crafted with love and too much caffeine.</span>
        <span className="tracking-[0.3em] uppercase">Sarap, legit ✦</span>
      </div>
    </footer>
  );
};
