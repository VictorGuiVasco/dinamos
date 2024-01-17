import { BookBookmark } from '@phosphor-icons/react'

function Divider() {
  return (
    <div className="flex justify-center">
      <div className="w-full flex items-center gap-4 max-w-7xl px-6">
        <div className="w-full h-0 border-2 border-[#2A1700]"></div>
        <div>
          <BookBookmark size={48} color="#2A1700" />
        </div>
        <div className="w-full h-0 border-2 border-[#2A1700]"></div>
      </div>
    </div>
  )
}

export { Divider }
