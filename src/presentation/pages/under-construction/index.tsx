import Image from 'next/image'

import underConstruction from '/public/images/under-construction.svg'

function UnderConstructionPage() {
  return (
    <div className="h-screen flex justify-center">
      <div className="h-full w-full flex items-center max-w-7xl px-6">
        <div className="w-full flex flex-col justify-center items-center gap-6 mx-auto lg:mx-0 lg:flex-row lg:max-w-7xl">
          <div className="text-center lg:w-[40rem] lg:text-left">
            <h1 className="text-[#2A1700] font-bold text-4xl  leading-10 lg:text-6xl">
              Desculpe!
            </h1>

            <h2 className="mt-2 text-[#2A1700] font-semibold text-2xl leading-10 lg:text-4xl">
              Página em construção.
            </h2>

            <p className="mt-8 lg:mt-6 text-[#2A1700] text-center lg:text-left">
              Estamos trabalhando para entregar o melhor para você.
            </p>
          </div>

          <div className="flex justify-center lg:w-[40rem]">
            <Image
              src={underConstruction}
              alt=""
              className="w-full max-w-[40rem] rounded-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export { UnderConstructionPage }
