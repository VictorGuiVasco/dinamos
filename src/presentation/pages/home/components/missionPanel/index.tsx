import Image from 'next/image'

import dinamos from '/public/images/dinamos-mission.png'
import { Panel } from '@/presentation/components/panel'

function MissionPanel() {
  return (
    <Panel>
      <div className="w-full grid grid-rows-1 justify-center items-center mx-auto lg:mx-0 lg:flex lg:max-w-7xl">
        <div className="flex justify-center order-last lg:order-first mt-10 lg:mt-0 lg:mr-10">
          <Image
            src={dinamos}
            alt=""
            className="h-full w-auto max-h-[25rem] lg:max-h-[35rem] object-cover rounded-3xl"
          />
        </div>

        <div className="text-center lg:w-[39rem]">
          <h1 className="mb-8 text-orange-950 text-4xl font-bold lg:text-6xl">
            Nossa Missão
          </h1>
          <p className="text-orange-950 text-base">
            Cumprir a ordem de Cristo{' '}
            <span className="font-bold">
              {'"Ide por todo o mundo e pregai o evangelho a toda criatura."'}
            </span>
            Mc 16.15. Trabalhamos com missões urbanas, evangelismo fora das
            quatro paredes, grupos de células de evangelismo e crescimento,
            cultos e visitas. Na busca pelas vidas perdidas, para que conheçam a
            pessoa de Jesus.
          </p>
        </div>
      </div>
    </Panel>
  )
}

export { MissionPanel }
