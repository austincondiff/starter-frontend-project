import { cookies } from "next/headers"

import { Mail } from "./components/mail"
import { mails } from "./data"

export default function MailPage() {
  const layout = cookies().get("react-resizable-panels:layout:mail")
  const defaultLayout = layout ? JSON.parse(layout.value) : undefined

  return (
    <Mail
      mails={mails}
      defaultLayout={defaultLayout}
    />
  )
}
