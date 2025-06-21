import CreatePostForm from "@/components/CreatePostForm"
import PostItem from "@/components/PostItem"
import AuthLayout from "@/components/layout/AuthLayout"

export default function HomePage() {
  const posts = [
  {
    id: "1",
    author: {
      name: "Nguyễn Văn A",
      avatar: "https://i.pravatar.cc/150?img=1",
    },
    content: "Hôm nay trời đẹp quá 😍\nĐi dạo 1 chút cho thư giãn.",
    image: "https://source.unsplash.com/random/800x400?nature",
    createdAt: "2025-06-06T10:00:00Z",
  },
  {
    id: "2",
    author: {
      name: "Lê Thị B",
      avatar: "https://i.pravatar.cc/150?img=2",
    },
    content: "Tối nay ai rảnh cafe không ☕️",
    createdAt: "2025-06-07T02:15:00Z",
  },
]

  return (
    <AuthLayout>
      <div className="max-w-2xl mx-auto px-4 py-6">
        <CreatePostForm />

        <h1 className="text-xl font-semibold mb-4 text-sky-700">Bảng tin</h1>
        {posts.map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
      </div>
    </AuthLayout>
  )
}
