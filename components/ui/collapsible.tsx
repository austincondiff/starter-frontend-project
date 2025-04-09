"use client"

import * as CollapsiblePrimitive from "@radix-ui/react-collapsible"
import * as React from "react"

type CollapsibleProps = Omit<React.ComponentProps<typeof CollapsiblePrimitive.Root>, 'children'> & {
  children?: React.ReactNode | ((props: { open: boolean }) => React.ReactNode)
  defaultOpen?: boolean
}

function Collapsible({
  children,
  defaultOpen,
  ...props
}: CollapsibleProps) {
  const [open, setOpen] = React.useState(defaultOpen ?? false)

  React.useEffect(() => {
    if (defaultOpen !== undefined) {
      setOpen(defaultOpen)
    }
  }, [defaultOpen])

  return (
    <CollapsiblePrimitive.Root 
      data-slot="collapsible" 
      open={open} 
      onOpenChange={setOpen}
      {...props}
    >
      {typeof children === "function" ? children({ open }) : children}
    </CollapsiblePrimitive.Root>
  )
}

function CollapsibleTrigger({
  ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.CollapsibleTrigger>) {
  return (
    <CollapsiblePrimitive.CollapsibleTrigger
      data-slot="collapsible-trigger"
      {...props}
    />
  )
}

function CollapsibleContent({
  ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.CollapsibleContent>) {
  return (
    <CollapsiblePrimitive.CollapsibleContent
      data-slot="collapsible-content"
      {...props}
    />
  )
}

export { Collapsible, CollapsibleTrigger, CollapsibleContent }
