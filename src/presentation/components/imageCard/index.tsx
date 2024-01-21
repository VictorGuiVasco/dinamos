import { ReactNode } from 'react'

interface ImageCardProps {
  classes?: string
  children: ReactNode
}

function ImageCard({ classes, children }: Readonly<ImageCardProps>) {
  let className =
    'w-40 h-[16rem] lg:w-80 lg:h-[27.5rem] rounded-2xl drop-shadow-lg border-8 border-[#FFF8F4] ' +
    classes

  return <div className={className}>{children}</div>
}

export { ImageCard }
