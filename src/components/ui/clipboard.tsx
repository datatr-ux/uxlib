import * as React from "react"
import { Copy, Check, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

// ─────────────────────────────────────────────
// Context
// ─────────────────────────────────────────────

interface ClipboardContextValue {
  value: string
  copied: boolean
  copy: () => void
  download: (fileName: string) => void
  multiline: boolean
}

const ClipboardContext = React.createContext<ClipboardContextValue | null>(null)

function useClipboardContext() {
  const ctx = React.useContext(ClipboardContext)
  if (!ctx) throw new Error("Clipboard subcomponents must be used inside <Clipboard>")
  return ctx
}

// ─────────────────────────────────────────────
// Root
// ─────────────────────────────────────────────

export interface ClipboardProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "onCopy"> {
  value: string
  onCopy?: (value: string) => void
  onDownload?: (value: string) => void
  children?: React.ReactNode
  multiline?: boolean
  showCopiedIcon?: boolean
  showDownloadButton?: boolean
}


export function Clipboard({
  value,
  onCopy,
  onDownload,
  multiline = false,
  showCopiedIcon = true,
  showDownloadButton = false,
  className,
  children,
  ...props
}: ClipboardProps) {
  const [copied, setCopied] = React.useState(false)
  const timeoutRef = React.useRef<number | null>(null)

  const copy = React.useCallback(async () => {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(true)
      onCopy?.(value)
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
      timeoutRef.current = window.setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Clipboard copy failed", err)
    }
  }, [value, onCopy])

  const download = React.useCallback((fileName: string = "clipboard.txt") => {
    if (onDownload) return onDownload(value)
    const blob = new Blob([value], { type: "text/plain;charset=utf-8" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = fileName
    a.click()
    URL.revokeObjectURL(url)
  }, [value, onDownload])

  React.useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [])

  const isSimple = !children

  return (
    <ClipboardContext.Provider value={{ value, copied, copy, download, multiline }}>
      <div
        className={cn(
          "relative z-0 flex w-full max-w-full rounded-md border bg-gray-50 overflow-hidden",
          "focus-within:z-10 focus-within:ring-1 focus-within:ring-ring",
          className
        )}
        {...props}
      >
        {isSimple ? (
          <>
            <ClipboardText />
            <ClipboardActions>
              <ClipboardCopyButton showCopiedIcon={showCopiedIcon} />
              {showDownloadButton && <ClipboardDownloadButton />}
            </ClipboardActions>
          </>
        ) : (
          children
        )}
      </div>
    </ClipboardContext.Provider>
  )
}

// ─────────────────────────────────────────────
// Text
// ─────────────────────────────────────────────

export function ClipboardText({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const { value, multiline } = useClipboardContext()

  return (
    <div
      tabIndex={0}
      role="textbox"
      aria-readonly="true"
      className={cn(
        "flex-1 px-3 py-2 font-mono text-sm text-muted-foreground w-full max-w-full pr-14",
        multiline
          ? "whitespace-pre-wrap break-words min-h-[4rem]"
          : "whitespace-nowrap overflow-x-auto",
        "[&::-webkit-scrollbar]:hidden scrollbar-hide",
        className
      )}
      {...props}
    >
      {value}
    </div>
  )
}

// ─────────────────────────────────────────────
// Actions
// ─────────────────────────────────────────────

export function ClipboardActions({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const { multiline } = useClipboardContext()

  return (
    <div
      className={cn(
        "z-[1] flex items-center gap-1",
        multiline
          ? // Multiline → small toolbar at top right
          "absolute right-1 top-1 bg-inherit"
          : // Single-line → full-height input style
          "absolute inset-y-0 right-0 flex items-center bg-inherit rounded-r-md px-2",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

// ─────────────────────────────────────────────
// Buttons
// ─────────────────────────────────────────────

export function ClipboardCopyButton({
  showCopiedIcon = true,
  className,
  ...props
}: React.ComponentProps<typeof Button> & { showCopiedIcon?: boolean }) {
  const { copied, copy } = useClipboardContext()
  return (
    <Button
      mode="ghost"
      size="sm"
      onClick={copy}
      aria-label="Copy to clipboard"
      className={cn("px-2 h-7", className)}
      {...props}
    >
      {copied && showCopiedIcon ? (
        <Check className="h-4 w-4 text-green-500" />
      ) : (
        <Copy className="h-4 w-4" />
      )}
    </Button>
  )
}

export function ClipboardDownloadButton({
  className,
  fileName = 'clipboard.txt',
  ...props
}: React.ComponentProps<typeof Button> & { fileName?: string }) {
  const { download } = useClipboardContext()
  return (
    <Button
      mode="ghost"
      size="sm"
      onClick={() => download(fileName)}
      aria-label="Download clipboard content"
      className={cn("px-2 h-7", className)}
      {...props}
    >
      <Download className="h-4 w-4" />
    </Button>
  )
}
