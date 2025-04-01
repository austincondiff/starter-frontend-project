import { Metadata } from "next"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { PageHeader } from "@/components/page-header"
import { EmptyPlaceholder, EmptyPlaceholderActions, EmptyPlaceholderDescription, EmptyPlaceholderTitle } from "@/components/empty-placeholder"

export const metadata: Metadata = {
  title: "Projects",
  description: "Manage your projects",
}

export default function ProjectsPage() {
  return (
    <>
    <PageHeader title="Projects" />
    <div className="@container/page flex flex-1 flex-col gap-4 p-6">
      <EmptyPlaceholder>
        <EmptyPlaceholderTitle>No projects found</EmptyPlaceholderTitle>
        <EmptyPlaceholderDescription>
          You can start creating projects by clicking the button below.
        </EmptyPlaceholderDescription>
        <EmptyPlaceholderActions>
          <Button>Create Project</Button>
        </EmptyPlaceholderActions>
      </EmptyPlaceholder>
    </div>
    </>
  )
}

function FieldGroup({ children }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="field-group"
      className="@container/field-group flex max-w-4xl min-w-0 flex-col gap-8 @3xl:gap-6"
    >
      {children}
    </div>
  )
}

function Field({ children, className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="field"
      className={cn(
        "grid auto-rows-min items-start gap-3 *:data-[slot=label]:col-start-1 *:data-[slot=label]:row-start-1 @3xl/field-group:grid-cols-2 @3xl/field-group:gap-6",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

function FieldControl({
  children,
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="field-control"
      className={cn(
        "@3xl/field-group:col-start-2 @3xl/field-group:row-span-2 @3xl/field-group:row-start-1 @3xl/field-group:self-start",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

function FieldDescription({
  children,
  className,
  ...props
}: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="field-description"
      className={cn(
        "text-muted-foreground text-sm @3xl/field-group:col-start-1 @3xl/field-group:row-start-1 @3xl/field-group:translate-y-6",
        className
      )}
      {...props}
    >
      {children}
    </p>
  )
}
