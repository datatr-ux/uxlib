"use client"

import * as React from "react"
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

// ─────────────────────────────────────
// Variants (ODS color bar)
// ─────────────────────────────────────
type Variant =
  | "neutral"
  | "information"
  | "primary"
  | "success"
  | "warning"
  | "critical"

const VAR_BG: Record<Variant, string> = {
  neutral: "bg-neutral-75",
  information: "bg-information-75",
  primary: "bg-primary-500",
  success: "bg-success-75",
  warning: "bg-warning-75",
  critical: "bg-critical-75",
}

// ─────────────────────────────────────
// Radix primitives
// ─────────────────────────────────────
const AlertDialog = AlertDialogPrimitive.Root
const AlertDialogTrigger = AlertDialogPrimitive.Trigger
const AlertDialogPortal = AlertDialogPrimitive.Portal

// ─────────────────────────────────────
// Overlay
// ─────────────────────────────────────
const AlertDialogOverlay = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-40 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out",
      className
    )}
    {...props}
  />
))
AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName

// ─────────────────────────────────────
// Content wrapper
// ─────────────────────────────────────
const AlertDialogContent = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content> & {
    variant?: Variant
  }
>(({ className, children, variant, ...props }, ref) => (
  <AlertDialogPortal>
    <AlertDialogOverlay />
    <AlertDialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-1/2 top-1/2 z-50 w-full max-w-lg -translate-x-1/2 -translate-y-1/2",
        "bg-[var(--ods-color-neutral-000)] shadow-lg sm:rounded-[var(--ods-border-radius-sm)]",
        "flex flex-col max-h-[calc(100vh-32px)] overflow-hidden outline-none",
        className
      )}
      {...props}
    >
      {/* Color bar */}
      <div
        className={cn(
          "h-[32px] w-full shrink-0 flex items-center justify-end px-3",
          variant ? VAR_BG[variant] : "bg-transparent"
        )}
      >
      </div>

      {children}
    </AlertDialogPrimitive.Content>
  </AlertDialogPortal>
))
AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName

// ─────────────────────────────────────
// Slots (same as Dialog)
// ─────────────────────────────────────
const AlertDialogHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("px-6 pt-4 pb-4 flex flex-col space-y-2 shrink-0", className)} {...props} />
)

const AlertDialogBody = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("px-6 py-1 pb-6 overflow-auto flex-1", className)} {...props} />
)

const AlertDialogFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "p-6 flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 gap-2",
      className
    )}
    {...props}
  />
)

const AlertDialogTitle = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Title
    ref={ref}
    className={cn("text-lg font-semibold leading-none", className)}
    {...props}
  />
))
AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName

const AlertDialogDescription = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
AlertDialogDescription.displayName = AlertDialogPrimitive.Description.displayName

// ─────────────────────────────────────
// Actions (use buttonVariants)
// ─────────────────────────────────────
const AlertDialogActionButton = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Action>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Action
    ref={ref}
    className={cn(buttonVariants(), className)}
    {...props}
  />
))
AlertDialogActionButton.displayName = "AlertDialogActionButton"

const AlertDialogCancelButton = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Cancel>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Cancel>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Cancel
    ref={ref}
    className={cn(buttonVariants({ mode: "outline" }), "mt-2 sm:mt-0", className)}
    {...props}
  />
))
AlertDialogCancelButton.displayName = "AlertDialogCancelButton"

// ─────────────────────────────────────
// Exports
// ─────────────────────────────────────
export {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogActionButton as AlertDialogAction,
  AlertDialogCancelButton as AlertDialogCancel,
}
