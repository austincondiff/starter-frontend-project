import { Metadata } from "next"
import { Page } from "@/components/page"
import { EmptyPlaceholder, EmptyPlaceholderActions, EmptyPlaceholderDescription, EmptyPlaceholderTitle } from "@/components/empty-placeholder"
import { Button } from "@/components/ui/button"
import { BookOpen } from "lucide-react"

export const metadata: Metadata = {
  title: "Documentation",
  description: "Manage your documentation",
}

export default function DocumentationPage() {
  return (
    <Page title="Documentation" >
      <EmptyPlaceholder>
        <BookOpen className="size-16 text-muted-foreground" />
        <EmptyPlaceholderTitle>No documentation found</EmptyPlaceholderTitle>
        <EmptyPlaceholderDescription>
          You can start creating documentation by clicking the button below.
        </EmptyPlaceholderDescription>
        <EmptyPlaceholderActions>
          <Button>Create Documentation</Button>
        </EmptyPlaceholderActions>
      </EmptyPlaceholder>
    </Page>
  )
}
