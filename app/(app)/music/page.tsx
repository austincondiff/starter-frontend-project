import { Metadata } from "next"
import { PlusCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

import { AlbumArtwork } from "./components/album-artwork"
import { PodcastEmptyPlaceholder } from "./components/podcast-empty-placeholder"
import { listenNowAlbums, madeForYouAlbums, topArtists, recentlyPlayed, newReleases } from "./data/albums"
import { Page, PageTab } from "@/components/page"

export const metadata: Metadata = {
  title: "Music App",
  description: "Example music app using the components.",
}

const PageContentGroup = ({ title, description, children }: { title: string, description: string, children: React.ReactNode }) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between pb-4">
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold tracking-tight">
            {title}
          </h2>
          <p className="text-sm text-muted-foreground">
            {description}
          </p>
        </div>
      </div>
      <div className="relative">
        {children}
      </div>
    </div>
  )
}

export default function MusicPage() {
  return (
    <>
      <Page title="Listen Now">
        <PageTab value="music" label="Music">
          <div className="flex flex-col gap-4">
            <PageContentGroup title="Listen Now" description="Top picks for you. Updated daily.">
              <ScrollArea>
                <div className="flex space-x-4 pb-4">
                  {listenNowAlbums.map((album) => (
                    <AlbumArtwork
                      key={album.name}
                      album={album}
                      className="w-[250px]"
                      aspectRatio="portrait"
                      width={250}
                      height={330}
                    />
                  ))}
                </div>
                <ScrollBar orientation="horizontal" />
              </ScrollArea>
            </PageContentGroup>
            <PageContentGroup title="Made for You" description="Your personal playlists. Updated daily.">
              <ScrollArea>
                <div className="flex space-x-4 pb-4">
                  {madeForYouAlbums.map((album) => (
                    <AlbumArtwork
                      key={album.name}
                      album={album}
                      className="w-[150px]"
                      aspectRatio="square"
                      width={150}
                      height={150}
                    />
                  ))}
                </div>
                <ScrollBar orientation="horizontal" />
              </ScrollArea>
            </PageContentGroup>
            <PageContentGroup title="Top Artists" description="Your most played artists and their latest tracks.">
              <ScrollArea>
                <div className="flex space-x-4 pb-4">
                  {topArtists.map((album) => (
                    <AlbumArtwork
                      key={album.name}
                      album={album}
                      className="w-[150px]"
                      aspectRatio="square"
                      width={150}
                      height={150}
                    />
                  ))}
                </div>
                <ScrollBar orientation="horizontal" />
              </ScrollArea>
            </PageContentGroup>
            <PageContentGroup title="Recently Played" description="Your listening history from the past few days.">
              <ScrollArea>
                <div className="flex space-x-4 pb-4">
                  {recentlyPlayed.map((album) => (
                    <AlbumArtwork
                      key={album.name}
                      album={album}
                      className="w-[150px]"
                      aspectRatio="square"
                      width={150}
                      height={150}
                    />
                  ))}
                </div>
                <ScrollBar orientation="horizontal" />
              </ScrollArea>
            </PageContentGroup>
            <PageContentGroup title="New Releases" description="Fresh drops from your favorite artists.">
              <ScrollArea>
                <div className="flex space-x-4 pb-4">
                  {newReleases.map((album) => (
                    <AlbumArtwork
                      key={album.name}
                      album={album}
                      className="w-[150px]"
                      aspectRatio="square"
                      width={150}
                      height={150}
                    />
                  ))}
                </div>
                <ScrollBar orientation="horizontal" />
              </ScrollArea>
            </PageContentGroup>
          </div>
        </PageTab>
        <PageTab value="podcasts" label="Podcasts">        
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <h2 className="text-2xl font-semibold tracking-tight">
                New Episodes
              </h2>
              <p className="text-sm text-muted-foreground">
                Your favorite podcasts. Updated daily.
              </p>
            </div>
          </div>
          <PodcastEmptyPlaceholder />
        </PageTab>
        <PageTab value="live" label="Live">
          Live content
        </PageTab>
      </Page>
    </>
  )
}
