import { User } from "lucide-react"

const mockMessages = [
  { from: "me", text: "Chào bạn!" },
  { from: "other", text: "Hello 😄" },
  { from: "me", text: "Mình cần hỗ trợ nhé!" },
]

export default function ChatWindow({ selectedUser }: { selectedUser: string }) {
  return (
    <div className="flex flex-col flex-1 bg-gray-50 h-full">
      {/* Header */}
      <div className="border-b p-4 flex items-center gap-2 bg-white shadow-sm">
        <User className="text-sky-600 w-5 h-5" />
        <span className="font-medium text-sky-700">Đang chat với {selectedUser}</span>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-6 space-y-3">
        {mockMessages.map((msg, idx) => (
          <div
            key={idx}
            className={`max-w-xs px-4 py-2 rounded-2xl text-sm shadow-md ${
              msg.from === "me"
                ? "ml-auto bg-sky-500 text-white"
                : "bg-white text-gray-800"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="p-4 bg-white border-t flex items-center gap-2">
        <input
          type="text"
          placeholder="Nhập tin nhắn..."
          className="flex-1 border rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
        />
        <button className="bg-sky-500 text-white px-4 py-2 rounded-xl hover:bg-sky-600 transition">
          Gửi
        </button>
      </div>
    </div>
  )
}
