"use client"

import * as React from "react"
import { PageSidebar, PageSidebarGroups, PageSidebarGroup, PageSidebarButton } from "@/components/page"
import { links } from "./data"
import { Calendar } from "@/components/ui/calendar";
import { Separator } from "@/components/ui/separator";

interface Link {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
}

export default function MailLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PageSidebar title="Calendar">
        <PageSidebarGroups>
          <PageSidebarGroup>
            {links.map((link: Link, index: number) => (
              <PageSidebarButton key={index} isActive={index === 0} icon={link.icon} badge={link.label}>
                {link.title}
              </PageSidebarButton>
            ))}
          </PageSidebarGroup>
        </PageSidebarGroups>
          <div className="flex-1" />
          <div className="flex flex-col sticky bottom-0 bg-sidebar gap-1">
            <Separator className="-mx-3 data-[orientation=horizontal]:w-[calc(100%+(var(--spacing)*3*2))]" />
            <Calendar className="p-0 w-full -mx-3" />
          </div>
      </PageSidebar>
      {children}
    </>
  )
} 
