import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  // ==== Base ODS-style ====
  "inline-flex items-center justify-center rounded-md font-semibold overflow-hidden select-none transition-colors duration-150",
  {
    variants: {
      variant: {
        // ===== PRIMARY =====
        primary: [
          "border border-sm border-primary-500 bg-primary text-primary-0",
          "hover:enabled:border-primary-700 hover:enabled:bg-primary-700",
          "active:enabled:border-primary-800 active:enabled:bg-primary-800",
          "disabled:border-border-disabled disabled:bg-background-disabled disabled:text-text-disabled disabled:cursor-not-allowed",
        ].join(" "),

        // ===== CRITICAL =====
        critical: [
          "border border-sm border-critical-500 bg-critical text-primary-0",
          "hover:enabled:border-critical-700 hover:enabled:bg-critical-700",
          "active:enabled:border-critical-800 active:enabled:bg-critical-800",
          "disabled:border-border-disabled disabled:bg-background-disabled disabled:text-text-disabled disabled:cursor-not-allowed",
        ].join(" "),

        // ===== NEUTRAL =====
        neutral: [
          "border border-sm border-neutral-600 bg-neutral-600 text-neutral-0",
          "hover:enabled:border-neutral-700 hover:enabled:bg-neutral-700",
          "active:enabled:border-neutral-800 active:enabled:bg-neutral-800",
          "disabled:border-border-disabled disabled:bg-background-disabled disabled:text-text-disabled disabled:cursor-not-allowed",
        ].join(" "),

        // ===== INFORMATION =====
        information: [
          "border border-sm border-information-100 bg-information-100 text-information-700",
          "hover:enabled:border-information-200 hover:enabled:bg-information-200",
          "active:enabled:border-information-300 active:enabled:bg-information-300",
          "disabled:border-border-disabled disabled:bg-background-disabled disabled:text-text-disabled disabled:cursor-not-allowed",
        ].join(" "),

        // ===== SUCCESS =====
        success: [
          "border border-sm border-success-500 bg-success text-success-0",
          "hover:enabled:border-success-700 hover:enabled:bg-success-700",
          "active:enabled:border-success-800 active:enabled:bg-success-800",
          "disabled:border-border-disabled disabled:bg-background-disabled disabled:text-text-disabled disabled:cursor-not-allowed",
        ].join(" "),

        // ===== WARNING =====
        warning: [
          "border border-sm border-warning-400 bg-warning-400 text-warning-900",
          "hover:enabled:border-warning-500 hover:enabled:bg-warning-500",
          "active:enabled:border-warning-600 active:enabled:bg-warning-600",
          "disabled:border-border-disabled disabled:bg-background-disabled disabled:text-text-disabled disabled:cursor-not-allowed",
        ].join(" "),

        // ===== MENU =====
        menu:
          "border-2 border-primary text-primary font-semibold rounded-full hover:enabled:bg-primary-100 disabled:border-border-disabled disabled:text-text-disabled disabled:cursor-not-allowed",
      },

      mode: {
        default: "",
        outline: "bg-transparent",
        ghost: "bg-transparent border-0 border-sm border-transparent",
        menu: "bg-transparent",
      },

      size: {
        xs: "h-6 rounded-xs px-[5px] text-xs gap-1", // 24px
        sm: "h-8 px-[5px] text-sm gap-1.5",          // 32px
        md: "h-10 px-[7px] text-base gap-2",         // 40px
        lg: "h-11 px-8 text-base gap-2",             // optional upscale
        menu: "size-8 p-0",                          // circular menu button
      },
    },

    // === Compound Variants ===
    compoundVariants: [
      // OUTLINE MODES
      { variant: "primary", mode: "outline", className: "border border-sm border-primary-500 text-primary bg-primary-0 hover:enabled:bg-primary-100 hover:enabled:text-primary-700 active:enabled:bg-primary-200 active:enabled:text-primary-800 disabled:border-border-disabled disabled:bg-background-disabled disabled:text-text-disabled disabled:cursor-not-allowed" },
      { variant: "critical", mode: "outline", className: "border border-sm border-critical-500 text-critical bg-primary-0 hover:enabled:border-critical-700 hover:enabled:bg-critical-100 hover:enabled:text-critical-700 active:enabled:border-critical-800 active:enabled:bg-critical-200 active:enabled:text-critical-800 disabled:border-border-disabled disabled:bg-background-disabled disabled:text-text-disabled disabled:cursor-not-allowed" },
      { variant: "neutral", mode: "outline", className: "border border-sm border-neutral-600 text-neutral bg-neutral-0 hover:enabled:border-neutral-700 hover:enabled:bg-neutral-100 hover:enabled:text-neutral-700 active:enabled:border-neutral-800 active:enabled:bg-neutral-200 active:enabled:text-neutral-800 disabled:border-border-disabled disabled:bg-background-disabled disabled:text-text-disabled disabled:cursor-not-allowed" },
      { variant: "information", mode: "outline", className: "border border-sm border-information-500 text-information bg-information-0 hover:enabled:border-information-700 hover:enabled:bg-information-100 hover:enabled:text-information-700 active:enabled:border-information-800 active:enabled:bg-information-200 active:enabled:text-information-800 disabled:border-border-disabled disabled:bg-background-disabled disabled:text-text-disabled disabled:cursor-not-allowed" },
      { variant: "success", mode: "outline", className: "border border-sm border-success-500 text-success bg-success-0 hover:enabled:border-success-700 hover:enabled:bg-success-100 hover:enabled:text-success-700 active:enabled:border-success-800 active:enabled:bg-success-200 active:enabled:text-success-800 disabled:border-border-disabled disabled:bg-background-disabled disabled:text-text-disabled disabled:cursor-not-allowed" },
      { variant: "warning", mode: "outline", className: "border border-sm border-warning-700 text-warning-700 bg-warning-0 hover:enabled:border-warning-800 hover:enabled:bg-warning-100 hover:enabled:text-warning-800 active:enabled:border-warning-900 active:enabled:bg-warning-200 active:enabled:text-warning-900 disabled:border-border-disabled disabled:bg-background-disabled disabled:text-text-disabled disabled:cursor-not-allowed" },

      // GHOST MODES
      { variant: "primary", mode: "ghost", className: "text-primary bg-transparent hover:enabled:bg-primary-100 hover:enabled:text-primary-700 active:enabled:bg-primary-200 active:enabled:text-primary-800 disabled:text-text-disabled disabled:cursor-not-allowed" },
      { variant: "critical", mode: "ghost", className: "text-critical-500 bg-transparent hover:enabled:bg-critical-100 hover:enabled:text-critical-700 active:enabled:bg-critical-200 active:enabled:text-critical-800 disabled:text-text-disabled disabled:cursor-not-allowed" },
      { variant: "neutral", mode: "ghost", className: "text-neutral-600 bg-transparent hover:enabled:bg-neutral-100 hover:enabled:text-neutral-700 active:enabled:bg-neutral-200 active:enabled:text-neutral-800 disabled:text-text-disabled disabled:cursor-not-allowed" },
      { variant: "information", mode: "ghost", className: "text-information-500 bg-transparent hover:enabled:bg-information-100 hover:enabled:text-information-700 active:enabled:bg-information-200 active:enabled:text-information-800 disabled:text-text-disabled disabled:cursor-not-allowed" },
      { variant: "success", mode: "ghost", className: "text-success-500 bg-transparent hover:enabled:bg-success-100 hover:enabled:text-success-700 active:enabled:bg-success-200 active:enabled:text-success-800 disabled:text-text-disabled disabled:cursor-not-allowed" },
      { variant: "warning", mode: "ghost", className: "text-warning-700 bg-transparent hover:enabled:bg-warning-100 hover:enabled:text-warning-800 active:enabled:bg-warning-200 active:enabled:text-warning-900 disabled:text-text-disabled disabled:cursor-not-allowed" },
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
