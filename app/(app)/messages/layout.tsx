"use client"

import * as React from "react"
import { PageSidebar, PageSidebarGroups, PageSidebarGroup, PageSidebarButton } from "@/components/page"
import { conversations, type Conversation } from "./data"
import { SidebarInput } from "@/components/ui/sidebar"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export default function MessagesLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <>
      <PageSidebar title="Messages">
        <div className="flex flex-col gap-2">
          <SidebarInput placeholder="Type to search..." />
          <div className="flex flex-col -mx-3">
            {conversations.map((conversation: Conversation) => {
              const lastMessage = conversation.messages.length > 0 ? conversation.messages[conversation.messages.length - 1] : null
              const isActive = pathname === `/messages/${conversation.id}`
              return (
                <Link
                  href={`/messages/${conversation.id}`}
                  key={conversation.id}
                  className={cn(
                    "flex flex-col items-start gap-2 whitespace-nowrap border-b p-4 text-sm leading-tight last:border-b-0 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                    isActive && "bg-sidebar-accent text-sidebar-accent-foreground"
                  )}
                >
                  <div className="flex w-full items-center gap-2">
                    <span>{conversation.name}</span>
                    <span className="ml-auto text-xs">{lastMessage?.date ?? "Now"}</span>
                  </div>
                  <span className="line-clamp-2 w-full whitespace-break-spaces text-xs">
                    {lastMessage?.message ?? "New message"}
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </PageSidebar>
      {children}
    </>
  )
} 
