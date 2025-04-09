import { Metadata } from "next"
import { Page } from "@/components/page"
import { EmptyPlaceholder, EmptyPlaceholderActions, EmptyPlaceholderDescription, EmptyPlaceholderTitle } from "@/components/empty-placeholder"
import { Button } from "@/components/ui/button"
import { MessageCircle, Send } from "lucide-react"
import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"
import { conversations, type Conversation } from "./data"
export const metadata: Metadata = {
  title: "Messages",
  description: "Manage your documentation",
}

export default function MessagesPage() {
  return (
    <Page title="" largeTitle={false}>
      <EmptyPlaceholder>
        <MessageCircle className="size-16 text-muted-foreground" />
        <EmptyPlaceholderTitle>No messages</EmptyPlaceholderTitle>
        <EmptyPlaceholderDescription>
          Select a conversation on the left or start a new one.
        </EmptyPlaceholderDescription>
        <EmptyPlaceholderActions>
          <Button>New Conversation</Button>
        </EmptyPlaceholderActions>
      </EmptyPlaceholder>
    </Page>
  )
}
