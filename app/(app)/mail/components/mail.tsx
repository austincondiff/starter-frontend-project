"use client"

import * as React from "react"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import { Separator } from "@/components/ui/separator"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { TooltipProvider } from "@/components/ui/tooltip"
import { MailDisplay } from "./mail-display"
import { MailList } from "./mail-list"
import { type Mail } from "../data"
import { useMail } from "../use-mail"
import { SidebarTrigger } from "@/components/ui/sidebar"

interface MailProps {
  mails: Mail[]
  defaultLayout: number[] | undefined
  defaultCollapsed?: boolean
}

export function Mail({
  mails,
  defaultLayout = [32, 68],
}: MailProps) {
  const [mail] = useMail()

  return (
    <TooltipProvider delayDuration={0}>
      <ResizablePanelGroup
        direction="horizontal"
        onLayout={(sizes: number[]) => {
          document.cookie = `react-resizable-panels:layout:mail=${JSON.stringify(
            sizes
          )}`
        }}
        className="h-full items-stretch"
      >
        <ResizablePanel defaultSize={defaultLayout[0]} minSize={30} maxSize={50}>
          <Tabs defaultValue="all">
            <div className="sticky top-0 flex h-[var(--mobile-header-height)] md:h-[var(--header-height)] shrink-0 items-center gap-2 border-b bg-background z-50">
              <div className="flex w-full items-center gap-1 px-3 md:px-4 lg:gap-2 lg:px-6">
                <SidebarTrigger />
                <Separator
                  orientation="vertical"
                  className="mx-2 data-[orientation=vertical]:h-4" 
                />
                <h1 className="text-sm md:text-base font-semibold">Inbox</h1>
                <TabsList className="ml-auto">
                  <TabsTrigger
                    value="all"
                    className="text-zinc-600 dark:text-zinc-200"
                  >
                    All mail
                  </TabsTrigger>
                  <TabsTrigger
                    value="unread"
                    className="text-zinc-600 dark:text-zinc-200"
                  >
                    Unread
                  </TabsTrigger>
                </TabsList>
              </div>
            </div>
            <TabsContent value="all" className="m-0">
              <MailList items={mails} />
            </TabsContent>
            <TabsContent value="unread" className="m-0">
              <MailList items={mails.filter((item) => !item.read)} />
            </TabsContent>
          </Tabs>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={defaultLayout[1]} minSize={30}>
          <MailDisplay
            mail={mails.find((item) => item.id === mail.selected) || null}
          />
        </ResizablePanel>
      </ResizablePanelGroup>
    </TooltipProvider>
  )
}
