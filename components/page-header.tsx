"use client"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { ThemeToggle } from "@/components/theme-toggle"
import { 
  MoreHorizontal, 
  Share2, 
  BookmarkPlus, 
  Copy, 
  Download, 
  Printer,
  History,
  Plus
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useEffect, useState } from "react"

export function PageHeader({ title, largeTitle = true }: { title: string, largeTitle?: boolean }) {
  const [showTitle, setShowTitle] = useState(false)
  const [showBorder, setShowBorder] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Don't update state if body is scroll locked
      if (document.body.getAttribute('data-scroll-locked')) return
      
      setShowTitle(window.scrollY >= 36)
      setShowBorder(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header className="sticky top-0 flex h-[var(--mobile-header-height)] md:h-[var(--header-height)] shrink-0 items-center gap-2 border-b bg-background z-50 transition-[width,height,border-color] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-[var(--mobile-header-height)] md:group-has-data-[collapsible=icon]/sidebar-wrapper:h-[var(--header-height)]" style={{ borderColor: showBorder ? 'var(--border)' : 'transparent' }}>
        <div className="flex w-full items-center gap-1 px-3 md:px-4 lg:gap-2 lg:px-6">
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mx-2 data-[orientation=vertical]:h-4 transition-opacity duration-200" 
            style={{ opacity: showTitle ? 1 : 0 }}
          />
          <h1 className="text-sm md:text-base font-medium transition-opacity duration-200" style={{ opacity: showTitle ? 1 : 0 }}>{title}</h1>
          <div className="ml-auto flex items-center gap-1 md:gap-2">
            <ThemeToggle />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8 md:h-10 md:w-10">
                  <MoreHorizontal className="h-4 w-4" />
                  <span className="sr-only">More actions</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-[200px]">
                <DropdownMenuItem>
                  <Plus className="mr-2 h-4 w-4" />
                  Add to sidebar
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <BookmarkPlus className="mr-2 h-4 w-4" />
                  Add to bookmarks
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Copy className="mr-2 h-4 w-4" />
                  Copy link
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Printer className="mr-2 h-4 w-4" />
                  Print page
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>
      {largeTitle && <h1 className="text-3xl font-bold px-4 lg:px-6">{title}</h1>}
    </>
  )
}

