import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          // Base ODS look
          "box-border flex h-8 w-full rounded-sm border border-[#b3b3b3] bg-white px-2.5 py-[3px] text-base text-text placeholder:text-neutral-500",
          // Hover + focus
          "hover:border-neutral-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2",
          // Disabled
          "disabled:cursor-not-allowed disabled:border-border-disabled disabled:bg-background-disabled disabled:text-text-disabled",
          // Readonly
          "read-only:bg-background-readonly read-only:border-border-readonly read-only:text-neutral-600 read-only:cursor-default",
          // Invalid (critical)
          "invalid:border-critical invalid:hover:border-critical-600",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
