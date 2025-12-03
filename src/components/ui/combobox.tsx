"use client"

import * as React from "react"
import { ChevronDown, Check } from "lucide-react"
import { cn } from "@/lib/utils"
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover"
import {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from "@/components/ui/command"

// -----------------------------------------------------------------------------
// 🧩 Context
// -----------------------------------------------------------------------------

interface ComboboxContextValue {
  open: boolean
  setOpen: (open: boolean) => void
  value?: string
  onValueChange?: (value: string) => void
}

const ComboboxContext = React.createContext<ComboboxContextValue | undefined>(
  undefined
)

function useComboboxContext() {
  const ctx = React.useContext(ComboboxContext)
  if (!ctx)
    throw new Error("Combobox primitives must be used within <Combobox>")
  return ctx
}

// -----------------------------------------------------------------------------
// 🧠 Root
// -----------------------------------------------------------------------------

interface ComboboxProps {
  value?: string
  onValueChange?: (value: string) => void
  open?: boolean
  onOpenChange?: (open: boolean) => void
  children: React.ReactNode
  modal?: boolean
}

export const Combobox = ({
  value,
  onValueChange,
  open,
  onOpenChange,
  modal,
  children,
}: ComboboxProps) => {
  const [internalOpen, setInternalOpen] = React.useState(false)
  const isControlled = open !== undefined
  const actualOpen = isControlled ? open : internalOpen

  const handleOpenChange = (next: boolean) => {
    if (!isControlled) setInternalOpen(next)
    onOpenChange?.(next)
  }

  return (
    <ComboboxContext.Provider
      value={{
        open: actualOpen,
        setOpen: handleOpenChange,
        value,
        onValueChange,
      }}
    >
      <Popover open={actualOpen} onOpenChange={handleOpenChange} modal={modal}>
        {children}
      </Popover>
    </ComboboxContext.Provider>
  )
}

// -----------------------------------------------------------------------------
// 🎯 Trigger
// -----------------------------------------------------------------------------

export const ComboboxTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, children, ...props }, ref) => {
  const { open } = useComboboxContext()

  return (
    <PopoverTrigger asChild>
      <button
        ref={ref}
        role="combobox"
        aria-expanded={open}
        className={cn(
          "box-border flex h-10 w-full items-center justify-between rounded-md border border-[#b3b3b3] bg-white px-2.5 py-[3px] text-sm text-text placeholder:text-neutral-500",
          "hover:border-neutral-200 hover:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2",
          "disabled:cursor-not-allowed disabled:border-border-disabled disabled:bg-background-disabled disabled:text-text-disabled",
          "data-[invalid]:border-critical data-[invalid]:hover:border-critical-600",
          className
        )}
        {...props}
      >
        {children}
        <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
      </button>
    </PopoverTrigger>
  )
})
ComboboxTrigger.displayName = "ComboboxTrigger"

// -----------------------------------------------------------------------------
// 💬 Value
// -----------------------------------------------------------------------------

export interface ComboboxValueProps {
  value?: React.ReactNode
  placeholder?: React.ReactNode
  className?: string
  children?: (props: { value?: React.ReactNode; placeholder?: React.ReactNode }) => React.ReactNode
}

export const ComboboxValue = ({
  value,
  placeholder,
  className,
  children,
}: ComboboxValueProps) => {
  const content = children
    ? children({ value, placeholder })
    : value ?? <span className="text-neutral-500">{placeholder}</span>

  return <span className={cn("truncate", className)}>{content}</span>
}

// -----------------------------------------------------------------------------
// 📜 Content (wraps Command, keyword-based filter)
// -----------------------------------------------------------------------------

export const ComboboxContent = React.forwardRef<
  React.ElementRef<typeof PopoverContent>,
  React.ComponentPropsWithoutRef<typeof PopoverContent> & {
    filter?: React.ComponentPropsWithoutRef<typeof Command>["filter"]
  }
>(({ className, children, filter, ...props }, ref) => {

  const defaultFilter = React.useCallback(
    (itemValue: string, search: string, keywords?: string[]) => {
      const text = [itemValue, ...(keywords ?? [])].join(" ").toLowerCase()
      return text.includes(search.toLowerCase()) ? 1 : 0
    },
    []
  )

  return (
    <PopoverContent
      ref={ref}
      className={cn(
        "w-[--radix-popover-trigger-width] max-h-[--radix-popover-content-available-height] p-0",
        className
      )}
      align="start"
      {...props}
    >
      <Command filter={filter ?? defaultFilter}>
        {children}
      </Command>
    </PopoverContent>
  )
})
ComboboxContent.displayName = "ComboboxContent"

// -----------------------------------------------------------------------------
// 📦 Command re-exports
// -----------------------------------------------------------------------------

export const ComboboxInput = CommandInput
export const ComboboxList = CommandList
export const ComboboxEmpty = CommandEmpty
export const ComboboxGroup = CommandGroup

// -----------------------------------------------------------------------------
// 🧩 Item (with check icon + smooth scroll)
// -----------------------------------------------------------------------------

export const ComboboxItem = React.forwardRef<
  React.ElementRef<typeof CommandItem>,
  React.ComponentPropsWithoutRef<typeof CommandItem>
>(({ className, children, ...props }, ref) => {
  const { onValueChange, setOpen, value: selectedValue, open } = useComboboxContext()
  const itemRef = React.useRef<HTMLDivElement | null>(null)
  const isSelected = selectedValue === props.value

  // Merge refs
  React.useImperativeHandle(ref, () => itemRef.current as HTMLDivElement)

  // Smooth scroll selected item into view when opening
  React.useEffect(() => {
    if (open && isSelected && itemRef.current) {
      itemRef.current.scrollIntoView({ block: "center", behavior: "smooth" })
    }
  }, [open, isSelected])

  return (
    <CommandItem
      ref={itemRef}
      onSelect={(val) => {
        props.onSelect?.(val)
        onValueChange?.(val)
        setOpen(false)
      }}
      className={cn(
        'cursor-pointer hover:bg-primary-50', 
        "relative flex w-full select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none",
        "focus:bg-accent focus:text-accent-foreground data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 data-[disabled=true]:cursor-not-allowed",
        isSelected && "bg-primary-50",
        className
      )}
      data-selected={isSelected || undefined}
      {...props}
    >
      {/* Check indicator on the left */}
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        {isSelected && <Check className="h-4 w-4" />}
      </span>

      {/* Text content (user can style it freely) */}
      <span className="flex-1">{children}</span>
    </CommandItem>
  )
})
ComboboxItem.displayName = "ComboboxItem"
