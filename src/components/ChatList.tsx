export default function ChatList() {
  const users = ['Nam', 'Trang', 'An', 'Linh']
  return (
    <aside className="p-4 border-r">
      <h2 className="font-bold mb-2">Tin nhắn</h2>
      <ul className="space-y-2">
        {users.map(user => (
          <li key={user} className="p-2 hover:bg-sky-100 rounded cursor-pointer">{user}</li>
        ))}
      </ul>
    </aside>
  )
}
