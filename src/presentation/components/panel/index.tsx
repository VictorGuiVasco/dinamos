import { ReactNode } from 'react'

interface PanelProps {
  children: ReactNode
}

function Panel({ children }: Readonly<PanelProps>) {
  return (
    <div className="flex justify-center">
      <div className="h-full w-full flex items-center max-w-7xl px-6 py-14 lg:py-12">
        <div className="w-full flex flex-col justify-center items-center gap-6 mx-auto lg:mx-0 lg:flex-row lg:max-w-7xl">
          {children}
        </div>
      </div>
    </div>
  )
}

export { Panel }
