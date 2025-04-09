import { Metadata } from "next"
import { Page } from "@/components/page"
import { EmptyPlaceholder, EmptyPlaceholderActions, EmptyPlaceholderDescription, EmptyPlaceholderTitle } from "@/components/empty-placeholder"
import { Button } from "@/components/ui/button"
import { Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Team",
  description: "Manage your team",
}

export default function TeamPage() {
  return (
    <Page title="Team" >
      <EmptyPlaceholder>
        <Users className="size-16 text-muted-foreground" />
        <EmptyPlaceholderTitle>No team members found</EmptyPlaceholderTitle>
        <EmptyPlaceholderDescription>
          You can start adding team members by clicking the button below.
        </EmptyPlaceholderDescription>
        <EmptyPlaceholderActions>
          <Button>Add Team Member</Button>
        </EmptyPlaceholderActions>
      </EmptyPlaceholder>
    </Page>
  )
}
