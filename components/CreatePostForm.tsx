/* eslint-disable @next/next/no-img-element */
 
"use client"

import { useState } from "react"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { ImagePlus, Loader2 } from "lucide-react"

export default function CreatePostForm() {
  const [content, setContent] = useState("")
  const [, setImage] = useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setImage(file)
      setPreviewUrl(URL.createObjectURL(file))
    }
  }

  const handleSubmit = async () => {
    if (!content.trim()) return
    setLoading(true)

    // TODO: Gửi API create post
    setTimeout(() => {
      setLoading(false)
      setContent("")
      setImage(null)
      setPreviewUrl(null)
      alert("Đăng bài thành công!")
    }, 1000)
  }

  return (
    <div className="bg-white p-4 rounded-xl border shadow-sm mb-6">
      <Textarea
        placeholder="Bạn đang nghĩ gì?"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="resize-none text-sm"
        rows={3}
      />

      {previewUrl && (
        <div className="mt-3">
          <img
            src={previewUrl}
            alt="preview"
            className="rounded-lg max-h-64 object-cover"
          />
        </div>
      )}

      <div className="mt-3 flex items-center justify-between">
        <label className="flex items-center gap-2 text-sky-600 cursor-pointer">
          <ImagePlus className="w-5 h-5" />
          <span className="text-sm font-medium">Thêm ảnh</span>
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageChange}
          />
        </label>

        <Button
          onClick={handleSubmit}
          disabled={loading}
          className="bg-sky-500 hover:bg-sky-600 text-white rounded-xl"
        >
          {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Đăng bài"}
        </Button>
      </div>
    </div>
  )
}
