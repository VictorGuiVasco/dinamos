import Image from 'next/image'

import dinamos from '/public/images/dinamos-group-2.jpeg'
import { Panel } from '@/presentation/components/panel'

function AboutPanel() {
  return (
    <Panel>
      <div className="text-center lg:w-[40rem]">
        <h1 className="text-[#2A1700] text-4xl font-bold mb-8 lg:text-6xl">
          Quem Somos
        </h1>
        <p className="text-[#2A1700] text-base max-w-[40rem]">
          Somos um grupo de jovens e adolescentes sedentos por Deus. Somos da
          Igreja <span className="font-bold">Assembleia de Deus (IEADAM)</span>,
          especificamente na congregação Valparaíso I, e levamos o nome de{' '}
          <span className="font-bold">Dínamos Religados</span> como identidade.
        </p>
      </div>

      <div className="flex justify-center lg:w-[40rem]">
        <Image
          src={dinamos}
          alt=""
          className="w-full max-w-[40rem] rounded-2xl"
        />
      </div>
    </Panel>
  )
}

export { AboutPanel }
