import { Metadata } from "next"
import { Page } from "@/components/page"
import { EmptyPlaceholder, EmptyPlaceholderActions, EmptyPlaceholderDescription, EmptyPlaceholderTitle } from "@/components/empty-placeholder"
import { Button } from "@/components/ui/button"
import { ChartLine, Folder } from "lucide-react"

export const metadata: Metadata = {
  title: "Analytics",
  description: "Manage your analytics",
}

export default function AnalyticsPage() {
  return (
    <Page title="Analytics" >
      <EmptyPlaceholder>
        <ChartLine className="size-16 text-muted-foreground" />
        <EmptyPlaceholderTitle>No analytics views</EmptyPlaceholderTitle>
        <EmptyPlaceholderDescription>
          You can start adding analytics views by clicking the button below.
        </EmptyPlaceholderDescription>
        <EmptyPlaceholderActions>
          <Button>Create View</Button>
        </EmptyPlaceholderActions>
      </EmptyPlaceholder>
    </Page>
  )
}
