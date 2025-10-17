import * as React from "react"
import { cn } from "@/lib/utils"

const Table = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => (
  <div className="relative w-full overflow-auto">
    <table
      ref={ref}
      className={cn("w-full border-collapse caption-bottom text-base", className)}
      {...props}
    />
  </div>
))
Table.displayName = "Table"

const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <thead
    ref={ref}
    className={cn(
      // Header cells background, color, and border
      "[&_tr>th]:bg-neutral-50 [&_tr>th]:text-primary-800 [&_tr>th]:font-semibold",
      "[&_tr>th]:border [&_tr>th]:border-neutral-100",
      // Include consistent height and line-height
      "[&_tr>th]:px-2 [&_tr>th]:py-4 [&_tr>th]:leading-[1rem] [&_tr>th]:align-middle",
      className
    )}
    {...props}
  />
))
TableHeader.displayName = "TableHeader"

const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tbody
    ref={ref}
    className={cn(
      // Background and text colors
      "[&_tr>th]:bg-neutral-0 [&_tr>td]:bg-neutral-0",
      "[&_tr>th]:text-text [&_tr>td]:text-text",
      // Borders
      "[&_tr>th]:border-y [&_tr>td]:border-y [&_tr>*]:border-neutral-100",
      "[&_tr>th:first-child]:border-l [&_tr>td:first-child]:border-l",
      "[&_tr>th:last-child]:border-r  [&_tr>td:last-child]:border-r",
      // Padding and line-height (matching SASS)
      "[&_tr>th]:px-2 [&_tr>th]:py-4 [&_tr>td]:px-2 [&_tr>td]:py-4 [&_tr>th]:leading-[1rem] [&_tr>td]:leading-[1rem]",
      className
    )}
    {...props}
  />
))
TableBody.displayName = "TableBody"

const TableFooter = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tfoot
    ref={ref}
    className={cn(
      "border-t border-neutral-100 bg-neutral-50 font-medium",
      className
    )}
    {...props}
  />
))
TableFooter.displayName = "TableFooter"

const TableRow = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
  <tr
    ref={ref}
    className={cn(
      "transition-colors hover:bg-neutral-50 data-[state=selected]:bg-neutral-100",
      className
    )}
    {...props}
  />
))
TableRow.displayName = "TableRow"

const TableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <th
    ref={ref}
    className={cn(
      "text-left font-semibold bg-neutral-50 text-primary-800 border border-neutral-100 align-middle leading-[1rem] px-2 py-4",
      className
    )}
    {...props}
  />
))
TableHead.displayName = "TableHead"

const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <td
    ref={ref}
    className={cn(
      "bg-neutral-0 text-text border-y border-neutral-100 align-middle leading-[1rem] px-2 py-4",
      className
    )}
    {...props}
  />
))
TableCell.displayName = "TableCell"

const TableCaption = React.forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
  <caption
    ref={ref}
    className={cn("p-2 caption-bottom font-semibold text-text", className)}
    {...props}
  />
))
TableCaption.displayName = "TableCaption"

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
}
