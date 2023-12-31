import Link from 'next/link'
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Web tutorials',
  description: 'Generated by chanshin0',
}

export default function RootLayout({children,}: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <h1><Link href='/'>WEB</Link></h1>
        <ol>
          <li><Link href='/read/1'>html</Link></li>
          <li><Link href="/read/2">css</Link></li>
        </ol>
        {children}
        <ul>
          <li><Link href="/create">create</Link></li>
          <li><Link href="/update/1">update</Link></li>
          <li><input type="button" value='delete'/></li>
        </ul>
      </body>
    </html>
  )
}
