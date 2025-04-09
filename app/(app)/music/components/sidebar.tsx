import { Button } from "@/components/ui/button"
import { Playlist } from "../data/playlists"
import { PlayCircle, LayoutGrid, Radio, ListMusic, Music2, User, MicVocal, Library } from "lucide-react"

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  playlists: Playlist[]
}

const PageSidebarButton = ({ children, isActive, icon: Icon, ...props }: { children: React.ReactNode, isActive: boolean, icon: React.ComponentType } & React.HTMLAttributes<HTMLButtonElement>) => {
  return (
    <Button variant={isActive ? "secondary" : "ghost"} className="w-full gap-3 justify-start" {...props}>
      <Icon />
      {children}
    </Button>
  )
}
export function Sidebar({ className, playlists }: SidebarProps) {
  return (
    <>
      <div className="space-y-4">
        <div className="py-4">
          <h2 className="mb-2 px-3 text-lg font-semibold tracking-tight">
            Discover
          </h2>
          <div className="space-y-1">
            <PageSidebarButton isActive={true} icon={PlayCircle}>
              Listen Now
            </PageSidebarButton>
            <PageSidebarButton isActive={false} icon={LayoutGrid}>
              Browse
            </PageSidebarButton>
            <PageSidebarButton isActive={false} icon={Radio}>
              Radio
            </PageSidebarButton>
          </div>
        </div>
        <div className="py-2">
          <h2 className="mb-2 px-3 text-lg font-semibold tracking-tight">
            Library
          </h2>
          <div className="space-y-1">
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
          </div>
        </div>
        <div className="py-2">
          <h2 className="mb-2 px-3 text-lg font-semibold tracking-tight">
            Playlists
          </h2>
            <div className="space-y-1">
              {playlists?.map((playlist, i) => (
                <PageSidebarButton
                  key={`${playlist}-${i}`}
                  isActive={false}
                  icon={ListMusic}
                >
                  {playlist}
                </PageSidebarButton>
              ))}
            </div>
        </div>
      </div>
    </>
  )
}
