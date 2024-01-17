import { Panel } from '@/presentation/components/panel'
import { InstagramEmbed } from 'react-social-media-embed'

function InstagramPanel() {
  return (
    <Panel>
      <div className="text-center lg:w-[40rem]">
        <h1 className="mb-8 text-[#2A1700] text-4xl font-bold lg:text-6xl">
          Fique atento nas programações
        </h1>
        <p className="text-[#2A1700] text-base max-w-[40rem]">
          Entre no nosso instagram e fique por dentro de todas nossas
          programações.
        </p>
      </div>

      <div className="lg:w-[30rem]">
        <InstagramEmbed
          url="https://www.instagram.com/p/C0b_Rf7OfLM/"
          width={320}
        />
      </div>
    </Panel>
  )
}

export { InstagramPanel }
