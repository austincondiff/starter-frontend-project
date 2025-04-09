import { Metadata } from "next"
import { Page } from "@/components/page"
import { EmptyPlaceholder, EmptyPlaceholderActions, EmptyPlaceholderDescription, EmptyPlaceholderTitle } from "@/components/empty-placeholder"
import { Button } from "@/components/ui/button"
import { ListTodo } from "lucide-react"

export const metadata: Metadata = {
  title: "Lifecycle",
  description: "Manage your lifecycle",
}

export default function LifecyclePage() {
  return (
    <Page title="Lifecycle">
      <EmptyPlaceholder>
        <ListTodo className="size-16 text-muted-foreground" />
        <EmptyPlaceholderTitle>No lifecycle found</EmptyPlaceholderTitle>
        <EmptyPlaceholderDescription>
          You can start creating lifecycle by clicking the button below.
        </EmptyPlaceholderDescription>
        <EmptyPlaceholderActions>
          <Button>Create Lifecycle</Button>
        </EmptyPlaceholderActions>
      </EmptyPlaceholder>
    </Page>
  )
}
