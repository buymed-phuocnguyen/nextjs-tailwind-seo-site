'use client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
// import { ModeToggle } from '@/components/ModeToggle'

export default function LoginPage() {
  const router = useRouter()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    if (username && password) {
      // fake login
      localStorage.setItem('user', username)
      router.push('/chat')
    }
  }

  return (
    <main className="h-screen flex items-center justify-center">
      {/* <ModeToggle /> */}
      <div className="w-full max-w-sm space-y-4 p-4 bg-white rounded mx-auto">
        <h1 className="text-2xl font-bold text-center">Đăng nhập</h1>
        <Input placeholder="Tên người dùng" value={username} onChange={e => setUsername(e.target.value)} />
        <Input placeholder="Mật khẩu" type="password" value={password} onChange={e => setPassword(e.target.value)} />
        <div className="w-full mx-auto text-center">
          <Button className="1/2" onClick={handleLogin}>Đăng nhập</Button>
        </div>

        <div className="flex gap-1">
          Bạn chưa có tài khoản ?
          Đăng ký ngay
          <div className="text-primary underline cursor-pointer"
            onClick={() => {
              router.push('/auth/register')
            }}>
            Tại đây
          </div>
        </div>
      </div>
    </main>
  )
}
