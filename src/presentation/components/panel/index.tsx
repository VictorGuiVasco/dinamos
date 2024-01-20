import { ReactNode } from 'react'

interface PanelsProps {
  children: ReactNode
}

function Panel({ children }: Readonly<PanelsProps>) {
  return (
    <div className="flex justify-center">
      <div className="h-full w-full flex items-center max-w-7xl px-6 py-14 lg:py-16">
        <div className="w-full flex flex-col justify-center items-center gap-6 mx-auto lg:mx-0 lg:flex-row lg:max-w-7xl">
          {children}
        </div>
      </div>
    </div>
  )
}

function PanelVertical({ children }: Readonly<PanelsProps>) {
  return (
    <div className="flex justify-center">
      <div className="h-full w-full flex items-center max-w-7xl px-6 py-14 lg:py-16">
        <div className="w-full flex flex-col justify-center items-center gap-6 mx-auto lg:mx-0 lg:max-w-7xl">
          {children}
        </div>
      </div>
    </div>
  )
}

export { Panel, PanelVertical }
