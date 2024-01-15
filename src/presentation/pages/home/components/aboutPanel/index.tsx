import Image from 'next/image'

import dinamos from '/public/images/dinamos-group-2.jpeg'
import { Panel } from '@/presentation/components/panel'

function AboutPanel() {
  return (
    <Panel>
      <div className="w-full justify-center items-center mx-auto lg:mx-0 lg:flex lg:max-w-7xl">
        <div className="text-center lg:w-[39rem]">
          <h1 className="mb-8 text-orange-950 text-4xl font-bold lg:text-6xl">
            Quem Somos
          </h1>
          <p className="text-orange-950 text-base">
            Somos um grupo de jovens e adolescentes sedentos por Deus. Somos da
            Igreja{' '}
            <span className="font-bold">Assembleia de Deus (IEADAM)</span>,
            especificamente na congregação Valparaíso I, e levamos o nome de{' '}
            <span className="font-bold">Dínamos Religados</span> como
            identidade.
          </p>
        </div>

        <div className="flex justify-center mt-10 lg:mt-0 lg:ml-10">
          <Image
            src={dinamos}
            alt=""
            className="w-full max-w-[40rem] rounded-3xl"
          />
        </div>
      </div>
    </Panel>
  )
}

export { AboutPanel }
