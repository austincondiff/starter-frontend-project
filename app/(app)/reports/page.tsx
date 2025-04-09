import { Metadata } from "next"
import { Page } from "@/components/page"
import { EmptyPlaceholder, EmptyPlaceholderActions, EmptyPlaceholderDescription, EmptyPlaceholderTitle } from "@/components/empty-placeholder"
import { Button } from "@/components/ui/button"
import { ClipboardCheck, Folder } from "lucide-react"

export const metadata: Metadata = {
  title: "Reports",
  description: "Manage your reports",
}

export default function ReportsPage() {
  return (
    <Page title="Reports" >
      <EmptyPlaceholder>
        <ClipboardCheck className="size-16 text-muted-foreground" />
        <EmptyPlaceholderTitle>No reports found</EmptyPlaceholderTitle>
        <EmptyPlaceholderDescription>
          You can start creating reports by clicking the button below.
        </EmptyPlaceholderDescription>
        <EmptyPlaceholderActions>
          <Button>Create Report</Button>
        </EmptyPlaceholderActions>
      </EmptyPlaceholder>
    </Page>
  )
}
