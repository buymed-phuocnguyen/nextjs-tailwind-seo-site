export default function Sidebar() {
  return (
    <div className="w-64 bg-white border-r p-4">
      <h2 className="text-xl font-bold mb-4">Chat</h2>
      <ul className="space-y-2">
        <li className="hover:bg-gray-200 p-2 rounded">Trang chủ</li>
        <li className="hover:bg-gray-200 p-2 rounded">Tin nhắn</li>
        <li className="hover:bg-gray-200 p-2 rounded">Cài đặt</li>
      </ul>
    </div>
  )
}
