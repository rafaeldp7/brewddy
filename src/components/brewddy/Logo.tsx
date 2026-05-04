import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  tone?: "cream" | "espresso";
}

export const Logo = ({ className, tone = "cream" }: LogoProps) => {
  const color = tone === "cream" ? "text-cream" : "text-espresso";
  return (
    
    <a href="#top" className={cn("brewddy-mark font-display text-2xl md:text-3xl tracking-tight inline-flex items-baseline", color, className)}>
      <img src="/assets/brewddy-logo.jpg" alt="BRewddy Logo" className="size-8 md:size-12 mr-2" />
      <span className="br">BR</span>
      <span className="ewddy">ewddy</span>
      <span className="ml-1 text-caramel text-base">✦</span>
    </a>
  );
};
