// File: components/layouts/MobileLayout.tsx
export default function MobileLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-sky-100 min-h-screen p-4">
      <header className="text-lg font-bold text-sky-700 mb-4">Zalo Chat - Mobile</header>
      <main>{children}</main>
    </div>
  )
}