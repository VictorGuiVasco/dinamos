import { ReactNode } from 'react'

interface PanelsProps {
  backgroundColor?: string
  children: ReactNode
}

function Panel({ backgroundColor, children }: Readonly<PanelsProps>) {
  const bgPanel = `bg-[${backgroundColor}]`
  let className = 'flex justify-center ' + bgPanel

  return (
    <div className={className}>
      <div className="h-full w-full flex items-center max-w-7xl px-6 py-14 lg:py-12">
        <div className="w-full flex flex-col justify-center items-center gap-6 mx-auto lg:mx-0 lg:flex-row lg:max-w-7xl">
          {children}
        </div>
      </div>
    </div>
  )
}

function PanelVertical({ backgroundColor, children }: Readonly<PanelsProps>) {
  const bgPanel = `bg-[${backgroundColor}]`
  let className = 'flex justify-center ' + bgPanel

  return (
    <div className={className}>
      <div className="h-full w-full flex items-center max-w-7xl px-6 py-14 lg:py-12">
        <div className="w-full flex flex-col justify-center items-center gap-6 mx-auto lg:mx-0 lg:max-w-7xl">
          {children}
        </div>
      </div>
    </div>
  )
}

export { Panel, PanelVertical }
