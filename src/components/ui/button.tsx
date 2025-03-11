import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary: "bg-primary text-white hover:bg-primary-700 focus-visible:ring-primary",
        critical: "bg-critical text-white hover:bg-critical-700 focus-visible:ring-info",
        neutral: "bg-neutral text-white hover:bg-neutral-700 focus-visible:ring-neutral",
        menu: "border text-primary border-primary border-2 font-semibold hover:bg-primary-100 rounded-full",
      },
      mode: {
        default: "",
        outline: "bg-transparent border",
        ghost: "bg-transparent",
        menu: "bg-background",
      },
      size: {
        md: "px-4 py-2 text-base",
        sm: "px-3 py-1 text-sm",
        xs: "px-2 py-0.5 text-xs",
        menu: "size-8 p-0"
      },
    },
    compoundVariants: [
      // Outline mode for each variant
      { variant: "primary", mode: "outline", className: "border-primary text-primary hover:bg-primary-100 hover:text-primary-700 active:bg-primary-200 active:text-primary-800" },
      { variant: "critical", mode: "outline", className: "border-critical text-critical hover:bg-critical-100 hover:text-critical-700 active:bg-critical-200 active:text-critical-800" },
      { variant: "neutral", mode: "outline", className: "border-neutral text-neutral hover:bg-neutral-100 hover:text-neutral-700 active:bg-neutral-200 active:text-neutral-800" },

      // Ghost mode for each variant
      { variant: "primary", mode: "ghost", className: "text-primary hover:bg-primary-100 hover:text-primary-700 active:bg-primary-200 active:text-primary-800" },
      { variant: "critical", mode: "ghost", className: "text-critical hover:bg-critical-100 hover:text-critical-700 active:bg-critical-200 active:text-critical-800" },
      { variant: "neutral", mode: "ghost", className: "text-neutral hover:bg-neutral-100 hover:text-neutral-700 active:bg-neutral-200 active:text-neutral-800" },
    ],
    defaultVariants: {
      variant: "primary",
      mode: "default",
      size: "md",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, mode,  asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, mode, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
