import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '칭감',
  description: '강점을 공유 플랫폼',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  )
}
