import { Metadata } from "next"
import { Page } from "@/components/page"
import { EmptyPlaceholder, EmptyPlaceholderActions, EmptyPlaceholderDescription, EmptyPlaceholderTitle } from "@/components/empty-placeholder"
import { Button } from "@/components/ui/button"
import { Folder } from "lucide-react"

export const metadata: Metadata = {
  title: "Projects",
  description: "Manage your projects",
}

export default function ProjectsPage() {
  return (
    <Page title="Projects" >
      <EmptyPlaceholder>
        <Folder className="size-16 text-muted-foreground" />
        <EmptyPlaceholderTitle>No projects found</EmptyPlaceholderTitle>
        <EmptyPlaceholderDescription>
          You can start creating projects by clicking the button below.
        </EmptyPlaceholderDescription>
        <EmptyPlaceholderActions>
          <Button>Create Project</Button>
        </EmptyPlaceholderActions>
      </EmptyPlaceholder>
    </Page>
  )
}
