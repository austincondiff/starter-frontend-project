"use client"

import * as React from "react"
import {
  IconInnerShadowTop,
} from "@tabler/icons-react"
import Link from "next/link"

import { NavDocuments } from "@/components/nav-documents"
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
} from "@/components/ui/sidebar"
import { ChartBar, ChartGantt, ChartLine, ChartLineIcon, ChartNoAxesCombined, ChartNoAxesGantt, ClipboardCheck, Folder, Gauge, List, ListTodo, Users, Database, FileCheck, Settings2, CircleHelp, BookOpen, BarChart3, LineChart, PieChart, TrendingUp } from "lucide-react"

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
      url: "#",
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
      url: "#",
      icon: Folder,
    },
    {
      title: "Roadmap",
      url: "#",
      icon: ChartGantt,
    },
    {
      title: "Reports",
      url: "#",
      icon: ClipboardCheck,
    },
    {
      title: "Team",
      url: "#",
      icon: Users,
    },
    {
      title: "Documentation",
      icon: BookOpen,
      items: [
        {
          title: "Introduction",
          url: "#",
        },
        {
          title: "Get Started",
          url: "#",
        },
        {
          title: "Tutorials",
          url: "#",
        },
        {
          title: "Changelog",
          url: "#",
        },
      ],
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
      url: "#",
      icon: CircleHelp,
    },
  ],
  documents: [
    {
      name: "Data Library",
      url: "#",
      icon: Database,
    },
    {
      name: "Reports",
      url: "#",
      icon: ClipboardCheck,
    },
    {
      name: "Word Assistant",
      url: "#",
      icon: FileCheck,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-2.5"
            >
              <Link href="/">
                <IconInnerShadowTop className="!size-5 mr-[-2px]" />
                <span className="text-base font-semibold">Acme Inc.</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavDocuments items={data.documents} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
