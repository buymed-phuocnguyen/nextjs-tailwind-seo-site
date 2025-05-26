// 4. pages/index.tsx
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Trang chủ - Website đơn giản</title>
        <meta name="description" content="Đây là trang chủ của website xây dựng bằng Next.js và Tailwind CSS." />
      </Head>
      <div>
        <h1 className="text-2xl font-bold">Chào mừng đến với trang chủ 1</h1>
        <p>Đây là website đơn giản sử dụng Next.js và Tailwind CSS.</p>
      </div>
    </>
  )
}
