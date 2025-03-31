import { AppSidebar } from "@/components/app-sidebar"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { CommandPaletteProvider } from "@/components/command-palette"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <CommandPaletteProvider>
      <SidebarProvider
        style={
          {
            "--sidebar-width": "calc(var(--spacing) * 72)",
            "--header-height": "calc(var(--spacing) * 16)",
          } as React.CSSProperties
        }
      >
        <AppSidebar />
        <SidebarInset>
          {children}
        </SidebarInset>
      </SidebarProvider>
    </CommandPaletteProvider>
  )
} 
