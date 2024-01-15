import { ReactNode } from 'react'

interface PanelProps {
  backgroundColor?: string
  children: ReactNode
}

function Panel({ backgroundColor, children }: PanelProps) {
  return (
    <div className="h-[95vh] flex justify-center">
      <div className="h-full flex items-center max-w-7xl px-6 py-14 lg:py-8">
        {children}
      </div>
    </div>
  )
}

export { Panel }
