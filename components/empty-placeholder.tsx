import { Button } from "@/components/ui/button"

export function EmptyPlaceholder({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm"
      x-chunk="dashboard-02-chunk-1"
    >
      <div className="flex flex-col items-center gap-1 text-center">
        {children}
      </div>
    </div>
  )
}

export function EmptyPlaceholderIcon({ children }: { children: React.ReactNode }) {
  return <div className="mt-4 flex gap-2">{children}</div>
}

export function EmptyPlaceholderTitle({ children }: { children: React.ReactNode }) {
  return <h3 className="text-2xl font-bold tracking-tight">{children}</h3>
}

export function EmptyPlaceholderDescription({ children }: { children: React.ReactNode }) {
  return <p className="text-sm text-muted-foreground">{children}</p>
}

export function EmptyPlaceholderActions({ children }: { children: React.ReactNode }) {
  return <div className="mt-4 flex gap-2">{children}</div>
}
