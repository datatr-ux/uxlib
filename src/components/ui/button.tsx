import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  // base (from ods-button mixin)
  "cursor-pointer inline-flex items-center justify-center rounded-md font-semibold overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ods-outline-color-default)] focus-visible:ring-offset-2 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        // ===== DEFAULT mode (primary)
        primary: [
          "border border-sm border-primary-500 bg-primary text-primary-0",
          "hover:border-primary-700 hover:bg-primary-700",
          "active:border-primary-800 active:bg-primary-800",
        ].join(" "),
        // ===== DEFAULT (critical)
        critical: [
          "border border-sm border-critical-500 bg-critical text-primary-0",
          "hover:border-critical-700 hover:bg-critical-700",
          "active:border-critical-800 active:bg-critical-800",
        ].join(" "),
        // ===== DEFAULT (neutral)
        neutral: [
          "border border-sm border-neutral-600 bg-neutral-600 text-neutral-0",
          "hover:border-neutral-700 hover:bg-neutral-700",
          "active:border-neutral-800 active:bg-neutral-800",
        ].join(" "),
        // ===== DEFAULT (information) – light bg / dark text family
        information: [
          "border border-sm border-information-100 bg-information-100 text-information-700",
          "hover:border-information-200 hover:bg-information-200",
          "active:border-information-300 active:bg-information-300",
        ].join(" "),
        // ===== DEFAULT (success)
        success: [
          "border border-sm border-success-500 bg-success text-success-0",
          "hover:border-success-700 hover:bg-success-700",
          "active:border-success-800 active:bg-success-800",
        ].join(" "),
        // ===== DEFAULT (warning)
        warning: [
          "border border-sm border-warning-400 bg-warning-400 text-warning-900",
          "hover:border-warning-500 hover:bg-warning-500",
          "active:border-warning-600 active:bg-warning-600",
        ].join(" "),

        // special 'menu' style (kept from your previous code)
        menu:
          "border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary-100",
      },

      mode: {
        // === default already baked into `color` rules above ===
        default: "",

        // === outline (border + light bg on hover/active)
        outline: "bg-transparent",

        // === ghost (no border, transparent bg, colored text + soft bg on hover/active)
        ghost: "bg-transparent border-0 border-sm border-transparent",

        // === passthrough for your menu buttons
        menu: "bg-transparent",
      },

      // sizes mapped to your Sass sizes (xs=24px, sm=32px, md=40px)
      size: {
        xs: "h-6 rounded-xs px-[5px] text-xs gap-1",        // 24px
        sm: "h-8 px-[5px] text-sm gap-1.5",                // 32px
        md: "h-10 px-[7px] text-base gap-2",               // 40px
        lg: "h-11 px-8 text-base gap-2",                   // optional upscale
        menu: "size-8 p-0",                                // circular menu button
      },
    },

    // map the “mode” overlays to each color via compound variants
    compoundVariants: [
      // ------- OUTLINE overlays -------
      { variant: "primary", mode: "outline", className: "border border-sm border-primary-500 text-primary bg-primary-0 hover:bg-primary-100 hover:text-primary-700 active:bg-primary-200 active:text-primary-800" },
      { variant: "critical", mode: "outline", className: "border border-sm border-critical-500 text-critical bg-primary-0 hover:border-critical-700 hover:bg-critical-100 hover:text-critical-700 active:border-critical-800 active:bg-critical-200 active:text-critical-800" },
      { variant: "neutral", mode: "outline", className: "border border-sm border-neutral-600 text-neutral bg-neutral-0 hover:border-neutral-700 hover:bg-neutral-100 hover:text-neutral-700 active:border-neutral-800 active:bg-neutral-200 active:text-neutral-800" },
      { variant: "information", mode: "outline", className: "border border-sm border-information-500 text-information bg-information-0 hover:border-information-700 hover:bg-information-100 hover:text-information-700 active:border-information-800 active:bg-information-200 active:text-information-800" },
      { variant: "success", mode: "outline", className: "border border-sm border-success-500 text-success bg-success-0 hover:border-success-700 hover:bg-success-100 hover:text-success-700 active:border-success-800 active:bg-success-200 active:text-success-800" },
      { variant: "warning", mode: "outline", className: "border border-sm border-warning-700 text-warning-700 bg-warning-0 hover:border-warning-800 hover:bg-warning-100 hover:text-warning-800 active:border-warning-900 active:bg-warning-200 active:text-warning-900" },

      // ------- GHOST overlays -------
      { variant: "primary", mode: "ghost", className: "text-primary bg-transparent hover:bg-primary-100 hover:text-primary-700 active:bg-primary-200 active:text-primary-800" },
      { variant: "critical", mode: "ghost", className: "text-critical-500 bg-transparent hover:bg-critical-100 hover:text-critical-700 active:bg-critical-200 active:text-critical-800" },
      { variant: "neutral", mode: "ghost", className: "text-neutral-600 bg-transparent hover:bg-neutral-100 hover:text-neutral-700 active:bg-neutral-200 active:text-neutral-800" },
      { variant: "information", mode: "ghost", className: "text-information-500 bg-transparent hover:bg-information-100 hover:text-information-700 active:bg-information-200 active:text-information-800" },
      { variant: "success", mode: "ghost", className: "text-success-500 bg-transparent hover:bg-success-100 hover:text-success-700 active:bg-success-200 active:text-success-800" },
      { variant: "warning", mode: "ghost", className: "text-warning-700 bg-transparent hover:bg-warning-100 hover:text-warning-800 active:bg-warning-200 active:text-warning-900" },
    ],

    defaultVariants: {
      variant: "primary",
      mode: "default",
      size: "md",
    },
  } as const
)

export type ButtonVariant = NonNullable<VariantProps<typeof buttonVariants>["variant"]>;
export type ButtonMode    = NonNullable<VariantProps<typeof buttonVariants>["mode"]>;
export type ButtonSize    = NonNullable<VariantProps<typeof buttonVariants>["size"]>;

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
