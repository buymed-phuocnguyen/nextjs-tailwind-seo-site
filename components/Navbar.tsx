import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex gap-4">
      <Link href="/">Trang chủ</Link>
      <Link href="/about">Giới thiệu</Link>
      <Link href="/contact">Liên hệ</Link>
    </nav>
  )
}
