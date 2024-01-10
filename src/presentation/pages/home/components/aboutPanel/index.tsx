import Image from 'next/image'

import dinamos from '/public/images/dinamos-group-2.jpeg'

function AboutPanel() {
  return (
    <div className="h-screen flex justify-center">
      <div className="h-full flex items-center max-w-7xl isolate px-6 py-14 lg:py-8">
        <div className="items-center mx-auto max-w-2xl lg:mx-0 lg:flex lg:max-w-7xl">
          <div className="text-center w-[39rem]">
            <h1 className="mb-8 text-orange-950 text-6xl font-bold">
              Quem Somos
            </h1>
            <p className="text-orange-950 text-base">
              Somos um grupo de jovens e adolescentes sedentos por Deus. Somos
              da Igreja{' '}
              <span className="font-bold">Assembleia de Deus (IEADAM)</span>,
              especificamente na congregação Valparaíso I, e levamos o nome de{' '}
              <span className="font-bold">Dínamos Religados</span> como
              identidade.
            </p>
          </div>

          <div className="flex mt-10 lg:mt-0 lg:ml-10">
            <Image
              src={dinamos}
              alt=""
              className="max-w-[40rem] w-full rounded-3xl"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export { AboutPanel }
