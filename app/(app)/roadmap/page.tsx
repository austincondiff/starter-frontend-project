import { Metadata } from "next"
import { ChartGantt } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Page } from "@/components/page"
import { EmptyPlaceholder, EmptyPlaceholderActions, EmptyPlaceholderDescription, EmptyPlaceholderTitle } from "@/components/empty-placeholder"

export const metadata: Metadata = {
  title: "Roadmap",
  description: "See the roadmap",
}

export default function RoadmapPage() {
  return (
    <Page title="Roadmap" >
        <EmptyPlaceholder>
        <ChartGantt className="size-16 text-muted-foreground" />
        <EmptyPlaceholderTitle>No items found</EmptyPlaceholderTitle>
        <EmptyPlaceholderDescription>
          You can start creating items on the roadmap by clicking the button below.
        </EmptyPlaceholderDescription>
        <EmptyPlaceholderActions>
          <Button>Create Item</Button>
        </EmptyPlaceholderActions>
      </EmptyPlaceholder>
    </Page>
  )
}
