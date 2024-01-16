import Image from 'next/image'

import missionImg from '/public/images/dinamos-mission.jpg'
import missionImg2 from '/public/images/dinamos-mission-2.jpg'
import missionImg3 from '/public/images/dinamos-mission-3.jpg'

import { Panel } from '@/presentation/components/panel'
import { ImageCard } from '@/presentation/components/imageCard'

function MissionPanel() {
  return (
    <Panel>
      <div className="relative h-[323px] w-[312px] lg:h-[560px] lg:w-[40rem] flex order-last lg:order-first">
        <ImageCard classes="absolute left-[152px] top-[69.23px] lg:left-[294px] lg:top-[120px]">
          <Image
            src={missionImg}
            alt=""
            className="h-full object-cover rounded-lg shadow-inner"
          />
        </ImageCard>

        <ImageCard classes="absolute left-0 top-[34.62px] lg:top-[60px] ">
          <Image
            src={missionImg3}
            alt=""
            className="h-full object-cover rounded-lg shadow-inner"
          />
        </ImageCard>

        <ImageCard classes="absolute left-[76px] lg:left-[147px] top-0">
          <Image
            src={missionImg2}
            alt=""
            className="h-full object-cover rounded-lg shadow-inner"
          />
        </ImageCard>
      </div>

      <div className="text-center lg:w-[40rem]">
        <h1 className="mb-8 text-[#2A1700] text-4xl font-bold lg:text-6xl">
          Nossa Missão
        </h1>
        <p className="text-[#2A1700] text-base max-w-[40rem]">
          Cumprir a ordem de Cristo{' '}
          <span className="font-bold">
            {'"Ide por todo o mundo e pregai o evangelho a toda criatura."'}
          </span>
          Mc 16.15. Trabalhamos com missões urbanas, evangelismo fora das quatro
          paredes, grupos de células de evangelismo e crescimento, cultos e
          visitas. Na busca pelas vidas perdidas, para que conheçam a pessoa de
          Jesus.
        </p>
      </div>
    </Panel>
  )
}

export { MissionPanel }
