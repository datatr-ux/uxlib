import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { Check } from "lucide-react"

import { cn } from "@/lib/utils"

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      className
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn("flex items-center justify-center")}
    >
      <Check className="h-4 w-4" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
))
Checkbox.displayName = CheckboxPrimitive.Root.displayName

const CheckboxIndicator = ({
  className, children
}: {
  className?: string, children?: React.ReactNode
}) => (
  <CheckboxPrimitive.Indicator forceMount
    className={cn(
      "h-4 w-4 shrink-0 rounded-sm border border-primary text-primary-foreground flex items-center justify-center",
      "data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      "ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      "disabled:cursor-not-allowed disabled:opacity-50",
      className
    )}
  >
    {children ?? <Check className="h-4 w-4" />}
  </CheckboxPrimitive.Indicator>
);

const CheckboxTile = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, children, ...props }, ref) => {
  return (
    <CheckboxPrimitive.Root
      ref={ref}
      className={cn(
        "text-left p-4 rounded-md bg-card text-card-foreground border border-border",
        "data-[state=checked]:border-primary data-[state=checked]:bg-primary-50 data-[state=checked]:shadow-[0_0_0_1px]",
        "ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        "disabled:cursor-not-allowed disabled:opacity-50 flex flex-col gap-2",
        className
      )}
      {...props}
    >
      {/* ✅ children always rendered */}
      {children}
    </CheckboxPrimitive.Root>
  )
});
CheckboxTile.displayName = 'CheckboxTile';
export { Checkbox, CheckboxIndicator, CheckboxTile }
