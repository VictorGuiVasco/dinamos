import { InstagramEmbed } from 'react-social-media-embed'

function InstagramPanel() {
  return (
    <div className="flex justify-center">
      <div className="h-full flex items-center max-w-7xl px-6 py-20 lg:py-12">
        <div className="w-full flex flex-col justify-center items-center gap-6 mx-auto lg:mx-0 lg:max-w-7xl">
          <div className="w-[312px] text-center text-orange-950 text-[32px] font-bold">
            Fique atento nas programações
          </div>
          <div className="w-[312px] text-center text-orange-950 text-base">
            Entre no nosso instagram e fique por dentro de tudo
          </div>

          <div>
            <InstagramEmbed
              url="https://www.instagram.com/p/C0b_Rf7OfLM/"
              width={320}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export { InstagramPanel }
