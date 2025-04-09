"use client"

import * as React from "react"
import { PageSidebar, PageSidebarGroups, PageSidebarGroup, PageSidebarButton } from "@/components/page"
import { links, categoryLinks } from "./data"

export default function MailLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PageSidebar title="Mail">
        <PageSidebarGroups>
          <PageSidebarGroup>
            {links.map((link, index) => (
              <PageSidebarButton key={index} isActive={index === 0} icon={link.icon} badge={link.label}>
                {link.title}
              </PageSidebarButton>
            ))}
          </PageSidebarGroup>
          <PageSidebarGroup title="Categories">
            {categoryLinks.map((link, index) => (
              <PageSidebarButton key={index} isActive={false} icon={link.icon} badge={link.label}>
                {link.title}
              </PageSidebarButton>
            ))}
          </PageSidebarGroup>
        </PageSidebarGroups>
      </PageSidebar>
      {children}
    </>
  )
} 
