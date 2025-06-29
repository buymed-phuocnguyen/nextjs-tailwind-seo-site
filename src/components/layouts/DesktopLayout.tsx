
// File: components/layouts/DesktopLayout.tsx
export default function DesktopLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <aside className="w-1/4 border-r border-gray-200 p-4 bg-sky-50 text-sky-800">
        <div className="font-bold text-xl mb-4">Sidebar</div>
        <ul>
          <li className="mb-2">🏠 Trang chủ</li>
          <li className="mb-2">💬 Tin nhắn</li>
          <li>👤 Tài khoản</li>
        </ul>
      </aside>
      <main className="flex-1 p-6 bg-white text-gray-900">{children}</main>
    </div>
  )
}