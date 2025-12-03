"use client"

import * as React from "react"
import { cva } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

function InputGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="input-group"
      role="group"
      className={cn(
        "group/input-group relative flex w-full items-center rounded-md border border-input bg-background shadow-xs transition-colors",
        "h-9 min-w-0 has-[>textarea]:h-auto",
        "focus-within:border-ring focus-within:ring-[3px] focus-within:ring-ring/50",
        "has-[[data-slot][aria-invalid=true]]:border-destructive has-[[data-slot][aria-invalid=true]]:ring-destructive/40",
        className
      )}
      {...props}
    />
  )
}

const inputGroupAddonConfig = {
  align: {
    "inline-start": "order-first pl-3",
    "inline-end": "order-last pr-3",
    "block-start": "order-first w-full justify-start px-3 pt-3",
    "block-end": "order-last w-full justify-start px-3 pb-3",
  },
} as const

export const inputGroupAddonVariants = cva(
  "text-muted-foreground flex h-auto cursor-text items-center justify-center gap-2 py-1.5 text-sm font-medium select-none [&>svg:not([class*='size-'])]:size-4",
  {
    variants: inputGroupAddonConfig,
    defaultVariants: {
      align: "inline-start",
    },
  }
)

export type InputGroupAddonAlign = keyof typeof inputGroupAddonConfig.align

export interface InputGroupAddonProps extends React.ComponentProps<"div"> {
  align?: InputGroupAddonAlign
}

function InputGroupAddon({
  className,
  align = "inline-start",
  ...props
}: InputGroupAddonProps) {
  return (
    <div
      role="presentation"
      data-slot="input-group-addon"
      data-align={align}
      className={cn(inputGroupAddonVariants({ align }), className)}
      onClick={(e) => {
        if ((e.target as HTMLElement).closest("button")) return
        e.currentTarget.parentElement?.querySelector("input")?.focus()
      }}
      {...props}
    />
  )
}

const inputGroupButtonConfig = {
  size: {
    xs: "h-6 px-2 gap-1 rounded-[calc(var(--radius)-5px)]",
    sm: "h-8 px-2.5 gap-1.5 rounded-md",
    "icon-xs": "size-6 p-0 rounded-[calc(var(--radius)-5px)]",
    "icon-sm": "size-8 p-0 rounded-md",
  },
} as const

export const inputGroupButtonVariants = cva(
  "flex items-center text-sm shadow-none",
  {
    variants: inputGroupButtonConfig,
    defaultVariants: {
      size: "xs",
    },
  }
)

export type InputGroupSize = keyof typeof inputGroupButtonConfig.size

export interface InputGroupButtonProps
  extends Omit<React.ComponentProps<typeof Button>, "size"> {
  size?: InputGroupSize
}

function InputGroupButton({
  className,
  type = "button",
  mode = "ghost",
  variant = "primary",
  size = "xs",
  ...props
}: InputGroupButtonProps) {
  return (
    <Button
      type={type}
      mode={mode}
      variant={variant}
      data-size={size}
      className={cn(
        inputGroupButtonVariants({ size }),
        "-ml-px first:ml-0 rounded-l-none last:rounded-r-md",
        "focus-visible:ring-0 focus-visible:outline-none",
        className
      )}
      {...props}
    />
  )
}

function InputGroupText({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "text-muted-foreground flex items-center gap-2 text-sm [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    />
  )
}

function InputGroupInput({
  className,
  ...props
}: React.ComponentProps<"input">) {
  return (
    <Input
      data-slot="input-group-control"
      className={cn(
        "flex-1 rounded-none border-0 bg-transparent shadow-none focus-visible:ring-0 focus-visible:outline-none focus-visible:ring-offset-0",
        className
      )}
      {...props}
    />
  )
}

function InputGroupTextarea({
  className,
  ...props
}: React.ComponentProps<"textarea">) {
  return (
    <Textarea
      data-slot="input-group-control"
      className={cn(
        "flex-1 resize-none rounded-none border-0 bg-transparent py-3 shadow-none focus-visible:ring-0 focus-visible:outline-none focus-visible:ring-offset-0",
        className
      )}
      {...props}
    />
  )
}

export {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupText,
  InputGroupInput,
  InputGroupTextarea,
}
