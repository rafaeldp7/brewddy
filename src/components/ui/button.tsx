import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium tracking-wide ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 overflow-hidden group",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        // BRewddy custom
        caramel:
          "bg-caramel text-cream shadow-caramel hover:shadow-lift hover:-translate-y-0.5 before:absolute before:inset-0 before:bg-gradient-to-r before:from-caramel-glow before:to-caramel before:-translate-x-full before:transition-transform before:duration-500 hover:before:translate-x-0 [&>span]:relative",
        ghostCream:
          "border border-cream/40 text-cream bg-transparent hover:bg-cream hover:text-espresso hover:border-cream backdrop-blur-sm",
        ghostEspresso:
          "border border-espresso/30 text-espresso bg-transparent hover:bg-espresso hover:text-cream",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 rounded-full px-4",
        lg: "h-14 rounded-full px-9 text-base",
        xl: "h-16 rounded-full px-10 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props}>
        {asChild ? (children as React.ReactElement) : <span>{children}</span>}
      </Comp>
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
