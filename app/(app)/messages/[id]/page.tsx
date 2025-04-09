"use client"

import * as React from "react"
import { conversations } from "../data"
import { 
  EmptyPlaceholder,
  EmptyPlaceholderIcon,
  EmptyPlaceholderTitle,
  EmptyPlaceholderDescription 
} from "@/components/empty-placeholder"
import { MessageCircle, Send, SquarePen, UserPlus } from "lucide-react"
import { Page } from "@/components/page"
import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const MessageBubble = ({ children, className , isUser}: { children: React.ReactNode, className?: string, isUser: boolean }) => {
  return (
    <div className={cn(
      "flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm",
      isUser ? "ml-auto bg-primary text-primary-foreground" : " mr-auto bg-muted",
      className
    )}>
      {children}
    </div>
  )
}

export default function ConversationPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = React.use(params)
  const conversation = conversations.find(c => c.id === id)

  if (!conversation) {
    return (
      <EmptyPlaceholder>
        <EmptyPlaceholderIcon>
          <MessageCircle className="h-8 w-8" />
        </EmptyPlaceholderIcon>
        <EmptyPlaceholderTitle>No conversation selected</EmptyPlaceholderTitle>
        <EmptyPlaceholderDescription>
          Select a conversation from the sidebar to view messages.
        </EmptyPlaceholderDescription>
      </EmptyPlaceholder>
    )
  }

  return (
    <Page 
      title={conversation.name} 
      largeTitle={false} 
      className="h-full flex flex-col" 
      renderActions={() => (
        <>
          <Button variant="ghost" size="icon">
            <UserPlus />
          </Button>
          <Button variant="ghost" size="icon">
            <SquarePen />
          </Button>
        </>
      )}
    >
      <div className="flex flex-col gap-4 flex-1">
        {conversation.messages.map((message, index) => (
          <MessageBubble key={index} isUser={message.isUser}>{message.message}</MessageBubble>
        ))}
      </div>
      <div className="flex items-center sticky bottom-0 bg-background -m-6 mt-0 px-6 h-16 border-t">
        <form className="flex w-full items-center space-x-2">
          <Input className="flex-1" id="message" placeholder={`Message ${conversation.name}`} autoComplete="off" autoFocus />
          <Button variant="default" size="icon" type="submit">
            <Send className="size-4" />
            <span className="sr-only">Send</span>
          </Button>
        </form>
      </div>
    </Page>
  )
} 
