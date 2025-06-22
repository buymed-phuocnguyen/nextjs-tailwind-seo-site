// components/auth/create-account-form.tsx
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Github, Mail } from "lucide-react"

export default function CreateAccountForm() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="max-w-md space-y-6 rounded px-6 py-8 shadow-sm bg-white">
        <div className="text-center space-y-1">
          <h1 className="text-2xl font-bold">Tạo một tài khoản</h1>
          <p className="text-sm text-muted-foreground">
            Enter your email below to create your account
          </p>
        </div>

        <form className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" placeholder="m@example.com" type="email" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" required />
          </div>
           <div className="grid gap-2">
            <Label htmlFor="password">Re - Password</Label>
            <Input id="password" type="password" required />
          </div>

          <Button type="submit" className="w-full">
            Create account
          </Button>
        </form>

        <div className="relative">
          <Separator className="absolute inset-0 top-2.5" />
          <span className="relative z-10 block bg-white px-4 text-sm text-muted-foreground text-center">
            OR CONTINUE WITH
          </span>
        </div>
        <div className="flex justify-between">
          <Button variant="outline" className="w-[48%]">
            <Github className="h-4" /> GitHub
          </Button>
          <Button variant="outline" className="w-[48%]">
            <Mail className="h-4" /> Google
          </Button>
        </div>
      </div>
    </div>
  )
}
