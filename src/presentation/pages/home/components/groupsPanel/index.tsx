import { WhatsappLogo } from '@phosphor-icons/react'
import Image from 'next/image'
import Link from 'next/link'

const celulas = [
  {
    name: 'Geração de Déboras',
    text: 'Célula das jovens meninas, liderada pela irmã Sara. Se reúnem todas as quintas para louvar ao senhor',
    logo: '/images/celulas/geracao-de-deboras.png',
  },
  {
    name: 'Oficina de Vidas',
    text: 'Célula de jovens homens, liderada pela irmão Victor e o irmão Thiago. Se reúnem todas as quintas para louvar ao senhor',
    logo: '/images/celulas/oficina-de-vidas.png',
  },
  {
    name: 'Atos 2',
    text: 'Célula de jovens homens, liderada pela irmão Emerson e o irmão Augusto. Se reúnem todas as quintas para louvar ao senhor',
    logo: '/images/celulas/atos-2.png',
  },
]

function GroupsPanel() {
  return (
    <div className="flex justify-center bg-[#FCDDBD]">
      <div className="h-full w-full flex items-center max-w-7xl px-6 py-14 lg:py-16">
        <div className="w-full flex flex-col justify-center items-center gap-6 mx-auto lg:mx-0 lg:max-w-7xl">
          <div className="text-center lg:w-[40rem]">
            <h1 className="mb-8 text-[#281805] text-4xl font-bold lg:text-6xl">
              Você já participa de célula?
            </h1>
            <p className="text-[#281805] text-base max-w-[40rem]">
              Participe de uma célula com a gente. Nossos jovens se reúnem
              semanalmente para falar do amor de Deus e pregar o evangélio.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {celulas.map((item) => (
              <div
                key={item.name}
                className="text-center w-[300px] bg-white rounded-2xl drop-shadow-lg px-6 py-[30px]"
              >
                <Image
                  src={item.logo}
                  alt=""
                  width={250}
                  height={250}
                  className="mb-8 rounded-lg"
                />
                <h1 className="mb-4 text-[#281805] text-lg font-bold">
                  {item.name}
                </h1>
                <p className="mb-8 text-[#281805] text-base max-w-[40rem]">
                  {item.text}
                </p>

                <Link
                  href="https://wa.me/5592986386131?text=Olá,%20queria%20participar%20de%20uma%20célula,%20pode%20me%20ajudar?"
                  target="_blank"
                  className="px-6 py-4 bg-[#B9CE9B] rounded-[7px] justify-center items-center gap-2.5 inline-flex"
                >
                  <div className="justify-start items-center gap-2.5 inline-flex">
                    <p className="text-center text-[#121F02] text-base font-medium leading-none">
                      Quero participar
                    </p>
                    <WhatsappLogo size={24} color="#121F02" />
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export { GroupsPanel }
