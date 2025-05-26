import Head from 'next/head'

export default function Contact() {
  return (
    <>
      <Head>
        <title>Liên hệ - Website đơn giản</title>
        <meta name="description" content="Trang liên hệ của website. Gửi câu hỏi hoặc góp ý qua email." />
      </Head>
      <div>
        <h1 className="text-2xl font-bold">Liên hệ 111</h1>
        <p>Hãy liên hệ với chúng tôi qua email: contact@example.com</p>
      </div>
    </>
  )
}