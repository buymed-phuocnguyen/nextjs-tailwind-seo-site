// pages/_app.tsx
import { redirect } from 'next/navigation'

export default function HomePage() {
  redirect('/auth/login') // hoặc kiểm tra auth
}
