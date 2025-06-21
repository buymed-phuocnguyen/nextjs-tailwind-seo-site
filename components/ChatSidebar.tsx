import { MessageCircle, User } from "lucide-react"

const conversations = [
  { id: "1", name: "Minh", lastMessage: "Hello bạn!" },
  { id: "2", name: "Linh", lastMessage: "Lúc nào rảnh nhắn nhé!" },
]

export default function ChatSidebar({ selectedId, onSelect }) {
  return (
    <aside className="w-72 bg-white border-r h-full flex flex-col">
      <div className="p-4 border-b flex items-center gap-2 text-sky-600 font-semibold text-lg">
        <MessageCircle className="w-5 h-5" />
        Tin nhắn
      </div>

      <ul className="flex-1 overflow-y-auto">
        {conversations.map((c) => (
          <li
            key={c.id}
            onClick={() => onSelect(c.id)}
            className={`cursor-pointer p-4 border-b transition-all hover:bg-sky-50 flex gap-2 items-start ${
              selectedId === c.id ? "bg-sky-100 text-sky-700 font-semibold" : ""
            }`}
          >
            <User className="w-6 h-6 text-sky-400 mt-1" />
            <div>
              <div className="text-sm">{c.name}</div>
              <div className="text-xs text-gray-500 truncate">{c.lastMessage}</div>
            </div>
          </li>
        ))}
      </ul>
    </aside>
  )
}
