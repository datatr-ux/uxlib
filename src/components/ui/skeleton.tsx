import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <span
      className={cn("block animate-pulse rounded-md bg-muted h-4 w-20", className)}
      {...props}
    />
  )
}

export { Skeleton }
