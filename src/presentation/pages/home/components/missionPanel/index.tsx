import Image from 'next/image'

import missionImg from '/public/images/dinamos-mission.jpg'
import missionImg2 from '/public/images/dinamos-mission-2.jpg'
import missionImg3 from '/public/images/dinamos-mission-3.jpg'

import { Panel } from '@/presentation/components/panel'

function MissionPanel() {
  return (
    <Panel>
      <div className="w-full flex flex-col justify-center items-center mx-auto lg:mx-0 lg:flex lg:flex-row lg:max-w-7xl">
        <div className="h-[323px] w-[312px] relative flex self-center order-last lg:order-first mt-8 lg:mt-0 lg:mr-10">
          <div className="left-[152px] top-[69.23px] absolute w-40 h-[254px] rounded-2xl shadow border-8 border-[#FFF8F4]">
            <Image
              src={missionImg}
              alt=""
              className="h-full object-cover rounded-lg shadow-inner"
            />
          </div>
          <div className="left-0 top-[34.62px] absolute w-40 h-[254px] rounded-2xl shadow border-8 border-[#FFF8F4]">
            <Image
              src={missionImg3}
              alt=""
              className="h-full w-auto object-cover rounded-lg shadow-inner"
            />
          </div>
          <div className="left-[76px] top-0 absolute w-40 h-[254px] rounded-2xl shadow border-8 border-[#FFF8F4]">
            <Image
              src={missionImg2}
              alt=""
              className="h-full w-auto object-cover rounded-lg shadow-inner"
            />
          </div>
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
