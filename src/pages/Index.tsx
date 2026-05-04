import { useReveal } from "@/hooks/useReveal";
import { Nav } from "@/components/brewddy/Nav";
import { Hero } from "@/components/brewddy/Hero";
import { Marquee } from "@/components/brewddy/Marquee";
import { Story } from "@/components/brewddy/Story";
import { Menu } from "@/components/brewddy/Menu";
import { Why } from "@/components/brewddy/Why";
import { Reviews } from "@/components/brewddy/Reviews";
import { CTA } from "@/components/brewddy/CTA";
import { Footer } from "@/components/brewddy/Footer";

const Index = () => {
  useReveal();
  return (
    <main className="min-h-screen bg-cream">
      <Nav />
      <Hero />
      <Marquee />
      <Story />
      <Menu />
      <Why />
      <Reviews />
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;
