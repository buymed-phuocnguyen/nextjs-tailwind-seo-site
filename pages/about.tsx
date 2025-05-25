import Head from "next/head";

export default function About() {
    return (
      <>
        <Head>
          <title>Giới thiệu - Website đơn giản</title>
          <meta name="description" content="Trang giới thiệu về website được xây dựng bằng Next.js và Tailwind CSS." />
        </Head>
        <div>
          <h1 className="text-2xl font-bold">Giới thiệu 2</h1>
          <p>Trang web này được xây dựng để minh họa cách kết hợp Next.js và Tailwind CSS cho một trang SEO cơ bản.</p>
        </div>
      </>
    )
  }