import './globals.scss'
import './mobile.scss'
import type { Metadata } from 'next'
import Providers from './Providers'

export const metadata: Metadata = {
  title: 'Film Utilities',
  description: 'Various utilities for Film Photography',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
