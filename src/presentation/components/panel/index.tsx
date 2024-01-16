import { ReactNode } from 'react'

interface PanelProps {
  children: ReactNode
}

function Panel({ children }: PanelProps) {
  return (
    <div className="flex justify-center">
      <div className="h-full flex items-center max-w-7xl px-6 py-14 lg:py-12">
        {children}
      </div>
    </div>
  )
}

export { Panel }
