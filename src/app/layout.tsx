import './globals.scss'
import './mobile.scss'
import type { Metadata } from 'next'
import Providers from './Providers'

export const metadata: Metadata = {
  title: 'Film Utilities',
  description: 'Various utilities for Film Photography',
  viewport: 'initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no, width=device-width, height=device-height, target-densitydpi=device-dpi"'
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
