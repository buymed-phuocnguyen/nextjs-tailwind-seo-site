'use client'
import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export default function ChatBox() {
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState<string[]>([])

  const handleSend = () => {
    if (message.trim()) {
      setMessages([...messages, message])
      setMessage('')
    }
  }

  return (
    <section className="flex flex-col h-full">
      <div className="flex-1 overflow-auto p-4 space-y-2">
        {messages.map((msg, idx) => (
          <div key={idx} className="bg-sky-100 p-2 rounded w-fit">{msg}</div>
        ))}
      </div>
      <div className="p-4 border-t flex gap-2">
        <Input value={message} onChange={e => setMessage(e.target.value)} placeholder="Nhập tin nhắn..." />
        <Button onClick={handleSend}>Gửi</Button>
      </div>
    </section>
  )
}
