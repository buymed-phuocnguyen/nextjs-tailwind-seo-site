import AuthLayout from "@/components/layout/AuthLayout"
import ChatSidebar from "@/components/ChatSidebar"
import ChatWindow from "@/components/ChatWindow"
import { useState } from "react"

export default function ChatPage() {
  const [selected, setSelected] = useState("1")

  return (
    <AuthLayout>
      <div className="flex h-full">
        <ChatSidebar selectedId={selected} onSelect={setSelected} />
        <ChatWindow selectedUser={`Người dùng #${selected}`} />
      </div>
    </AuthLayout>
  )
}
