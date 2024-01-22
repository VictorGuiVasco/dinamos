import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'

import { NavBarComponent } from '@/presentation/components/navBar'
import { FooterComponent } from '@/presentation/components/footer'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
})

export const metadata: Metadata = {
  title: 'Dínamos Religados',
  description: 'Site oficial do Grupo de Jovens Dínamos Religados',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <NavBarComponent />

        <div className="relative bg-[#fff8f4]">
          {children}
          <FooterComponent />
        </div>
      </body>
    </html>
  )
}
