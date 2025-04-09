"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { SidebarHeader, SidebarTrigger, SidebarContent, useSidebar } from "@/components/ui/sidebar"
import { Badge } from "@/components/ui/badge"
import { ThemeToggle } from "@/components/theme-toggle"
import { 
  MoreHorizontal, 
  BookmarkPlus, 
  Copy, 
  Printer,
  Plus,
  ChevronLeft,
  Icon
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useEffect, useState, createContext, useContext, Children, isValidElement, cloneElement } from "react"
import { cn } from "@/lib/utils"
import * as TabsPrimitive from "@radix-ui/react-tabs"
import { RovingFocusGroup, RovingFocusGroupItem } from "@radix-ui/react-roving-focus"
import { useSearchParams, useRouter } from "next/navigation"

interface PageTabProps {
  value: string
  label: string
  icon?: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}

export function PageTab({ children }: PageTabProps) {
  return <>{children}</>
}

export function Page({ title, children, defaultTab, largeTitle = true, renderActions, className }: { title: string, children: React.ReactNode, defaultTab?: string, largeTitle?: boolean, renderActions?: () => React.ReactNode, className?: string  }) {
  const searchParams = useSearchParams()
  const router = useRouter()

  const handleTabChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set("tab", value)
    router.replace(`?${params.toString()}`, { scroll: false })
  }
  
  // Extract tab information from children
  const tabs = React.Children.toArray(children).filter(
    (child): child is React.ReactElement<PageTabProps> => {
      return React.isValidElement(child) && 
        'value' in (child.props as Record<string, unknown>) && 
        'label' in (child.props as Record<string, unknown>) && 
        'children' in (child.props as Record<string, unknown>);
    }
  )

  // If no tabs are present, render content directly
  if (tabs.length === 0) {
    return (
      <>
        <PageHeader title={title} largeTitle={largeTitle} renderActions={renderActions} />
        <PageContainer className={className}>
          {children}
        </PageContainer>
      </>
    )
  }

  // Otherwise render tabbed content
  const tabsList = (
    <PageTabsList>
      {tabs.map((tab) => (
        <PageTabsTrigger key={tab.props.value} value={tab.props.value}>
          {tab.props.icon && <tab.props.icon />}
          {tab.props.label}
        </PageTabsTrigger>
      ))}
    </PageTabsList>
  );

  // Get the first tab's value if no default is specified
  const firstTabValue = tabs[0]?.props.value
  const activeTab = searchParams.get('tab') || defaultTab || firstTabValue

  return (
    <PageTabs defaultValue={activeTab} onValueChange={handleTabChange}>
      <PageHeader title={title} largeTitle={largeTitle} renderTabs={() => tabsList} renderActions={renderActions} />
      <PageContainer className={className}>
        {tabs.map((tab) => (
          <PageTabsContent key={tab.props.value} value={tab.props.value}>
            {tab.props.children}
          </PageTabsContent>
        ))}
      </PageContainer>
    </PageTabs>
  )
}

export function PageTabs({ children, defaultValue, value, onValueChange }: React.ComponentProps<typeof TabsPrimitive.Root>) {
  const [currentValue, setCurrentValue] = useState(value || defaultValue)

  const handleValueChange = (newValue: string) => {
    setCurrentValue(newValue)
    onValueChange?.(newValue)
  }

  return (
    <TabsPrimitive.Root defaultValue={defaultValue} value={currentValue} onValueChange={handleValueChange} className="flex flex-col">
      {children}
    </TabsPrimitive.Root>
  )
}

export function PageTabsList({ children, className }: React.ComponentProps<typeof TabsPrimitive.List>) {
  return (
    <RovingFocusGroup orientation="horizontal">
      <TabsPrimitive.List className={cn("bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]", className)}>
        {children}
      </TabsPrimitive.List>
    </RovingFocusGroup>
  )
}

export function PageTabsTrigger({ children, ...props }: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <RovingFocusGroupItem asChild>
      <TabsPrimitive.Trigger 
        {...props} 
        value={props.value} 
        className="data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
      >
        {children}
      </TabsPrimitive.Trigger>
    </RovingFocusGroupItem>
  )
}

export function PageTabsContent({ children, className, ...props }: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content {...props} value={props.value} className={cn("flex-1 outline-none", className)}>
      {children}
    </TabsPrimitive.Content>
  )
}

export const PageContainer = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  return <div className={cn("@container/page flex flex-1 flex-col gap-4 p-6", className)}>{children}</div>
}

export function PageHeader({ title, largeTitle = true, renderTabs, renderActions }: { title: string, largeTitle?: boolean, renderTabs?: () => React.ReactNode, renderActions?: () => React.ReactNode }) {
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
      <header className="sticky top-0 flex h-[var(--mobile-header-height)] md:h-[var(--header-height)] shrink-0 items-center gap-2 border-b bg-background z-50 transition-[width,height,border-color] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-[var(--mobile-header-height)] md:group-has-data-[collapsible=icon]/sidebar-wrapper:h-[var(--header-height)]" style={{ borderColor: !largeTitle || showBorder ? 'var(--border)' : 'transparent' }}>
        <div className="flex w-full items-center gap-1 px-3 md:px-4 lg:gap-2 lg:px-6">
          <SidebarTrigger />
          <Separator
            orientation="vertical"
            className="mx-2 data-[orientation=vertical]:h-4 transition-opacity duration-200" 
            style={{ opacity: !largeTitle || showTitle ? 1 : 0 }}
          />
          <h1 className="text-sm md:text-base font-semibold transition-opacity duration-200" style={{ opacity: !largeTitle || showTitle ? 1 : 0 }}>{title}</h1>
          <div className="ml-auto flex items-center gap-1 md:gap-2">
            {(!!renderActions || !!renderTabs) && (
              <>
                <div className="flex items-center gap-3 transition-opacity duration-200" style={{ opacity: !largeTitle || showTitle ? 1 : 0 }}>
                  {renderTabs?.()}
                  {renderActions?.()}
                </div>
                <Separator
                  orientation="vertical"
                  className="mx-2 data-[orientation=vertical]:h-4 transition-opacity duration-200" 
                  style={{ opacity: !largeTitle || showTitle ? 1 : 0 }}
                />
              </>
            )}
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
      {largeTitle && <div className="flex items-center gap-2 px-4 lg:px-6"><h1 className="flex-1 text-3xl font-bold">{title}</h1>{renderTabs?.()}{renderActions?.()}</div>}
    </>
  )
}

export function PageSidebar({ children, title }: { children: React.ReactNode, title: string }) {
  const { setPageSidebar, setOpen } = useSidebar()
  const hasMountedRef = React.useRef(false)
  const [showBorder, setShowBorder] = React.useState(false)
  const [showTitle, setShowTitle] = React.useState(false)

  const handleScroll = React.useCallback((content: HTMLDivElement | null) => {
    if (!content) return

    const handleScroll = () => {
      const scrollTop = content.scrollTop
      setShowBorder(scrollTop > 0)
      setShowTitle(scrollTop >= 36)
    }

    content.addEventListener('scroll', handleScroll)
    return () => content.removeEventListener('scroll', handleScroll)
  }, [])

  React.useEffect(() => {
    if (!hasMountedRef.current) {
      hasMountedRef.current = true
      setOpen(true)
    }
  }, [setOpen])

  const sidebar = React.useMemo(() => {
    console.log("PageSidebar render", { title, children, showBorder, showTitle })
    return(
      <>
        <SidebarHeader 
          className="px-3 border-b"
          style={{ borderColor: showBorder ? 'var(--border)' : 'transparent' }}
        >
          <SidebarTrigger icon={ChevronLeft} />
          <h1 className="text-sm md:text-base font-semibold transition-opacity duration-200" style={{ opacity: showTitle ? 1 : 0 }}>{title}</h1>
        </SidebarHeader>
        <SidebarContent ref={handleScroll} className="px-3">
          <h1 className="text-3xl font-bold px-3">{title}</h1>
          {children}
        </SidebarContent>
      </>
    )
  }, [title, children, showBorder, showTitle, handleScroll])

  React.useEffect(() => {
    setPageSidebar(sidebar)
    return () => {
      setPageSidebar(null)
    }
  }, [setPageSidebar, sidebar])

  return null
}

export function PageSidebarGroup({ children, title }: { children: React.ReactNode, title?: string }) {
  return (
    <div className="py-2">
      {title && <h2 className="mb-2 px-3 text-lg font-semibold tracking-tight">{title}</h2>}
      {children}
    </div>
  )
}

export function PageSidebarGroups({ children }: { children: React.ReactNode }) {
  return (
    <div className="py-2 space-y-4">{children}</div>
  )
}

export function PageSidebarButton({ children, isActive, icon: Icon, badge, ...props }: { children: React.ReactNode, isActive: boolean, icon: React.ComponentType, badge?: string } & React.HTMLAttributes<HTMLButtonElement>) {
  return (
    <Button variant={isActive ? "secondary" : "ghost"} className="w-full gap-3 justify-start" {...props}>
      <Icon />
      <span className="flex flex-1">{children}</span>
      {badge && <Badge variant={isActive ? "default" : "secondary"}>{badge}</Badge>}
    </Button>
  )
}
