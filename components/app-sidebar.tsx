"use client"

import * as React from "react"
import {
  IconInnerShadowTop,
} from "@tabler/icons-react"
import Link from "next/link"
import { useSidebar, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"

import { NavRecents } from "@/components/nav-recents"
import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarInset,
} from "@/components/ui/sidebar"
import { ChartGantt, ChartLine,ClipboardCheck, Folder, Gauge, ListTodo, Users, Database, FileCheck, Settings2, CircleHelp, BookOpen, Music, ChevronRight, Calendar, Mail, MessageCircle } from "lucide-react"
import { ReactNode, useEffect } from "react"

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/",
      icon: Gauge,
    },
    {
      title: "Lifecycle",
      url: "/lifecycle",
      icon: ListTodo,
    },
    {
      title: "Analytics",
      icon: ChartLine,
      items: [
        {
          title: "Overview",
          url: "/analytics",
        },
        {
          title: "Performance",
          url: "/analytics/performance",
        },
        {
          title: "Reports",
          url: "/analytics/reports",
        },
        {
          title: "Trends",
          url: "/analytics/trends",
        },
      ],
    },
    {
      title: "Projects",
      url: "/projects",
      icon: Folder,
    },
    {
      title: "Roadmap",
      url: "/roadmap",
      icon: ChartGantt,
    },
    {
      title: "Reports",
      url: "/reports",
      icon: ClipboardCheck,
    },
    {
      title: "Team",
      url: "/team",
      icon: Users,
    },
    {
      title: "Documentation",
      icon: BookOpen,
      items: [
        {
          title: "Introduction",
          url: "/documentation",
        },
        {
          title: "Get Started",
          url: "/documentation/get-started",
        },
        {
          title: "Tutorials",
          url: "/documentation/tutorials",
        },
        {
          title: "Changelog",
          url: "/documentation/changelog",
        },
      ],
    },
    {
      title: "Music",
      url: "/music",
      icon: Music,
    },
    {
      title: "Calendar",
      url: "/calendar",
      icon: Calendar,
    },
    {
      title: "Mail",
      url: "/mail",
      icon: Mail,
    },
    {
      title: "Messages",
      url: "/messages",
      icon: MessageCircle,
    },
  ],
  navSecondary: [
    {
      title: "Settings",
      url: "/settings",
      icon: Settings2,
    },
    {
      title: "Get Help",
      url: "/help",
      icon: CircleHelp,
    },
  ],
  documents: [
    {
      name: "Data Library",
      url: "/data-library",
      icon: Database,
    },
    {
      name: "Reports",
      url: "/reports",
      icon: ClipboardCheck,
    },
    {
      name: "File Assistant",
      url: "/file-assistant",
      icon: FileCheck,
    },
  ],
}

function IconSidebar({ pageSidebar, parentOpen, onOpenChange }: { 
  pageSidebar: ReactNode, 
  parentOpen: boolean,
  onOpenChange: (open: boolean) => void 
}) {
  const { setOpen, toggleSidebar, open } = useSidebar()
  const setOpenRef = React.useRef(setOpen)

  // Update the ref when setOpen changes
  React.useEffect(() => {
    setOpenRef.current = setOpen
  }, [setOpen])

  const hasPageSidebar = !!pageSidebar

  useEffect(() => {
    console.log("IconSidebar useEffect", { hasPageSidebar, parentOpen })
    
    // If parent is closed, always close the sidebar
    if (!parentOpen) {
      setOpenRef.current(false)
      return
    }

    // If parent is open
    if (!hasPageSidebar) {
      // If there's no page sidebar, open the sidebar
      setOpenRef.current(true)
    } else {
      // If there is a page sidebar, close the sidebar
      setOpenRef.current(false)
    }
  }, [hasPageSidebar, parentOpen])

  useEffect(() => {
    setOpenRef.current(!pageSidebar)
  }, [pageSidebar])

  // Notify parent of open state changes
  useEffect(() => {
    onOpenChange(open)
  }, [open, onOpenChange])

  return (
    <>
      <Sidebar collapsible="icon">
        <SidebarHeader>
          <SidebarMenu className="px-3">
            <SidebarMenuItem className="flex items-center justify-between overflow-hidden">
              <SidebarMenuButton
                asChild
                className="data-[slot=sidebar-menu-button]:!p-2.5"
              >
                <Link href="/">
                  <IconInnerShadowTop className="!size-5 mr-[-2px]" />
                  <span className="text-base font-semibold">Acme Inc.</span>
                </Link>
              </SidebarMenuButton>
              {pageSidebar ? <SidebarTrigger icon={ChevronRight} /> : undefined}
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <SidebarContent>
          <NavMain items={data.navMain} />
          <NavRecents items={data.documents} />
          <NavSecondary items={data.navSecondary} className="mt-auto" />
        </SidebarContent>
        <SidebarFooter>
          <NavUser user={data.user} />
        </SidebarFooter>
      </Sidebar>
      <SidebarInset className="bg-sidebar overflow-hidden">
        {pageSidebar}
      </SidebarInset>
    </>
  )
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { state, pageSidebar, open: parentOpen } = useSidebar()
  const [iconSidebarOpen, setIconSidebarOpen] = React.useState(!pageSidebar)
  
  console.log("AppSidebar render", { state, pageSidebar, parentOpen, iconSidebarOpen })

  const sidebarWidth = iconSidebarOpen 
    ? "calc(var(--spacing)*72)"
    : pageSidebar 
      ? "calc((var(--spacing)*72) + var(--sidebar-width-icon))" 
      : "calc(var(--spacing)*72)"

  return (
    <div 
      style={{
        display: "contents",
        "--sidebar-width": sidebarWidth,
      } as React.CSSProperties}
    >
      <Sidebar
        collapsible="icon" 
        className="overflow-hidden [&>[data-sidebar=sidebar]]:flex-row"
        {...props}
      >
        <SidebarProvider 
          defaultOpen={!pageSidebar} 
          style={{
            "--header-height": "calc(var(--spacing)*16)",
            "--sidebar-width": sidebarWidth,
          } as React.CSSProperties}
        >
          <IconSidebar 
            pageSidebar={pageSidebar} 
            parentOpen={parentOpen} 
            onOpenChange={setIconSidebarOpen}
          />
        </SidebarProvider>
      </Sidebar>
    </div>
  )
}
