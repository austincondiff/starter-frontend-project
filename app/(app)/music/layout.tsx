"use client"

import * as React from "react"
import { playlists } from "./data/playlists"
import { PageSidebar, PageSidebarGroups, PageSidebarGroup, PageSidebarButton } from "@/components/page"
import { PlayCircle, LayoutGrid, Radio, ListMusic, Music2, User, MicVocal, Library } from "lucide-react"

export default function MusicLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <PageSidebar title="Music">
        <PageSidebarGroups>
          <PageSidebarGroup title="Discover">
            <PageSidebarButton isActive={true} icon={PlayCircle}>
              Listen Now
            </PageSidebarButton>
            <PageSidebarButton isActive={false} icon={LayoutGrid}>
              Browse
            </PageSidebarButton>
            <PageSidebarButton isActive={false} icon={Radio}>
              Radio
            </PageSidebarButton>
          </PageSidebarGroup>
          <PageSidebarGroup title="Library">
            <PageSidebarButton isActive={false} icon={ListMusic}>
              Playlists
            </PageSidebarButton>
            <PageSidebarButton isActive={false} icon={Music2}>
              Songs
            </PageSidebarButton>
            <PageSidebarButton isActive={false} icon={User}>
              Made for You
            </PageSidebarButton>
            <PageSidebarButton isActive={false} icon={MicVocal}>
              Artists
            </PageSidebarButton>
            <PageSidebarButton isActive={false} icon={Library}>
              Albums
            </PageSidebarButton>
          </PageSidebarGroup>
          <PageSidebarGroup title="Playlists">
            {playlists?.map((playlist, i) => (
              <PageSidebarButton
                key={`${playlist}-${i}`}
                isActive={false}
                icon={ListMusic}
              >
                {playlist}
              </PageSidebarButton>
            ))}
          </PageSidebarGroup>
        </PageSidebarGroups>
      </PageSidebar>
      {children}
    </>
  )
} 
