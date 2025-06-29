/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { MessageCircle, Heart } from "lucide-react"
// import moment from "moment"
// import "moment/locale/vi"

// moment.locale("vi")

export default function PostItem({ post }: { post: any }) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-4 mb-4 border">
      {/* Header */}
      <div className="flex items-center gap-3 mb-3">
        <img
          src={post.author.avatar}
          alt={post.author.name}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <div className="font-semibold text-sky-700">{post.author.name}</div>
          {/* <div className="text-xs text-gray-500">{moment(post.createdAt).fromNow()}</div> */}
        </div>
      </div>

      {/* Content */}
      <div className="text-sm text-gray-800 whitespace-pre-line">{post.content}</div>

      {/* Image */}
      {post.image && (
        <div className="mt-3">
          <img
            src={post.image}
            alt="post"
            className="rounded-lg max-h-[300px] w-full object-cover"
          />
        </div>
      )}

      {/* Actions */}
      <div className="flex gap-4 mt-3 text-sm text-gray-500">
        <div className="flex items-center gap-1 cursor-pointer hover:text-sky-600">
          <Heart className="w-4 h-4" />
          Thích
        </div>
        <div className="flex items-center gap-1 cursor-pointer hover:text-sky-600">
          <MessageCircle className="w-4 h-4" />
          Bình luận
        </div>
      </div>
    </div>
  )
}
