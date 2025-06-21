import GuestLayout from "@/components/layout/GuestLayout"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Login() {
  return (
    <GuestLayout>
      <h1 className="text-2xl font-bold mb-4 text-center">Đăng nhập</h1>
      <Input placeholder="Email" className="mb-3" />
      <Input placeholder="Mật khẩu" type="password" className="mb-4" />
      <Button className="w-full">Đăng nhập</Button>
    </GuestLayout>
  )
}
