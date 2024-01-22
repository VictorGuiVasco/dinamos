import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '⚠️ Em Construção',
  description: 'Site oficial do Grupo de Jovens Dínamos Religados',
}

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <div className="relative bg-[#fff8f4]">{children}</div>
}
