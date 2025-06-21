export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header / Navbar */}
      <header className="bg-white border-b shadow-sm p-4 flex items-center justify-between">
        <h1 className="text-sky-600 font-bold text-lg">Zalo Clone</h1>
        <div className="text-sm text-gray-600">👤 Người dùng</div>
      </header>

      {/* Nội dung */}
      <main className="p-4">{children}</main>
    </div>
  )
}
