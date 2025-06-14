
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 relative overflow-hidden wave-btn",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 dark:bg-darkAccent-red dark:text-white dark:hover:bg-darkAccent-red/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground dark:border-darkAccent-red/50 dark:hover:bg-dark-800",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-darkAccent-red/10 dark:text-white",
        link: "text-primary underline-offset-4 hover:underline dark:text-white",
        gradient: "bg-blue-purple-gradient hover:bg-blue-purple-gradient-hover text-white dark:bg-red-gradient dark:hover:bg-red-gradient-hover",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        xl: "h-12 rounded-md px-10 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

// Add wave effect styles
const styles = document.createElement('style');
styles.innerHTML = `
  .btn-gradient {
    background: linear-gradient(90deg, #3b82f6 0%, #7c3aed 100%);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }
  
  .btn-gradient:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 15px -3px rgba(59, 130, 246, 0.3), 0 4px 6px -2px rgba(124, 58, 237, 0.2);
  }
  
  .dark .btn-gradient {
    background: linear-gradient(90deg, #ff1f3d 0%, #ff5e3a 100%);
    box-shadow: 0 4px 12px -2px rgba(255, 31, 61, 0.3);
  }
  
  .dark .btn-gradient:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px -3px rgba(255, 31, 61, 0.4), 0 4px 12px -2px rgba(255, 94, 58, 0.3);
  }
  
  .wave-btn::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.2);
    transform: translateX(-100%);
    transition: transform 0.7s ease;
  }
  
  .wave-btn:hover::after {
    transform: translateX(100%);
  }
`;
document.head.appendChild(styles);

export { Button, buttonVariants }
