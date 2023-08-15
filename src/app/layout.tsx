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
        <h1><a href='/'>WEB</a></h1>
        <ol>
          <li><a href='/read/1'>html</a></li>
          <li><a href="/read/2">css</a></li>
        </ol>
        {children}
        <ul>
          <li><a href="/create">create</a></li>
          <li><a href="/update/1">update</a></li>
          <li><input type="button" value='delete'/></li>
        </ul>
      </body>
    </html>
  )
}
