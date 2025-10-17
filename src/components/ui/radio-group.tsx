import * as React from "react"
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"

import { cn } from "@/lib/utils"

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={cn("grid gap-2", className)}
      {...props}
      ref={ref}
    />
  )
})
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName


const RadioIndicator = ({
  className,
}: {
  className?: string
}) => (
  <div
    data-uxlib
    className={cn(
      // base shape
      "aspect-square h-4 w-4 rounded-full flex items-center justify-center transition-all duration-150",
      // ODS base (unchecked)
      "border border-neutral-300 bg-white",
      // ✅ when the *parent item* is checked → primary border
      "group-data-[state=checked]:border-primary-500",
      // hover/focus/disabled
      "hover:border-neutral-400 group-data-[state=checked]:hover:border-primary-700",
      "group-data-[disabled]:cursor-not-allowed group-data-[disabled]:opacity-50",
      className
    )}
  >
    <RadioGroupPrimitive.Indicator
      className={cn(
        // ODS checked: primary border + fill
        "flex items-center justify-center w-full h-full rounded-full transition-colors duration-150",
        "data-[state=checked]:border-primary-500 data-[state=checked]:bg-primary-500 data-[state=checked]:hover:border-primary-700 data-[state=checked]:hover:bg-primary-700"
      )}
    >
      {/* Inner white dot (ODS `::before`) */}
      <span className="block w-1 h-1 rounded-full bg-primary-0 transition-transform duration-150 scale-100" data-uxlib/>
    </RadioGroupPrimitive.Indicator>
  </div>
)
RadioIndicator.displayName = "RadioIndicator"

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        "group",
        "relative inline-flex items-center justify-center w-4 h-4 rounded-full border border-neutral-300 cursor-pointer transition-all duration-150",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary-500",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "data-[state=checked]:border-primary-500 data-[state=checked]:bg-primary-500",
        "hover:border-neutral-400 data-[state=checked]:hover:border-primary-700 data-[state=checked]:hover:bg-primary-700",
        className
      )}
      {...props}
    >
      <RadioIndicator />
    </RadioGroupPrimitive.Item>
  )
})
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName

const RadioTile = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, children, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        "group",
        "text-left p-4 rounded-md bg-card text-card-foreground data-[state=checked]:border-primary data-[state=checked]:bg-primary-50 ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border border-border data-[state=checked]:shadow-[0_0_0_1px] flex flex-col gap-2",
        className
      )}
      {...props}
    >
      {children}
    </RadioGroupPrimitive.Item>
  )
})
RadioTile.displayName = 'RadioTile';


export { RadioGroup, RadioGroupItem, RadioTile, RadioIndicator }
