import { Metadata } from "next"
import { Page } from "@/components/page"
import { EmptyPlaceholder, EmptyPlaceholderActions, EmptyPlaceholderDescription, EmptyPlaceholderTitle } from "@/components/empty-placeholder"
import { Button } from "@/components/ui/button"
import { CircleHelp } from "lucide-react"

export const metadata: Metadata = {
  title: "Help",
  description: "Get help and support",
}

export default function HelpPage() {
  return (
    <Page title="Help" >
      <EmptyPlaceholder>
        <CircleHelp className="size-16 text-muted-foreground" />
        <EmptyPlaceholderTitle>No help yet</EmptyPlaceholderTitle>
        <EmptyPlaceholderDescription>
          No help is avaiable at the moment. Please contact support for now.
        </EmptyPlaceholderDescription>
        <EmptyPlaceholderActions>
          <Button>Contact Support</Button>
        </EmptyPlaceholderActions>
      </EmptyPlaceholder>
    </Page>
  )
}
