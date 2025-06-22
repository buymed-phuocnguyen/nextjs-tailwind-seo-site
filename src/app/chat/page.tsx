import ChatList from '@/components/ChatList'
import ChatBox from '@/components/ChatBox'

export default function ChatPage() {
  return (
    <main className="grid grid-cols-3 h-screen">
      <ChatList />
      <div className="col-span-2 border-l">
        <ChatBox />
      </div>
    </main>
  )
}
