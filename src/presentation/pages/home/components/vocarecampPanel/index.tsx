import Image from 'next/image'

import { Panel } from '@/presentation/components/panel'

import vocareLogo from '/public/images/vocare-logo.png'
import arrowRight from '/public/icons/arrow-right.svg'
import whatsappLogo from '/public/icons/whatsapp-logo.svg'

function VocareCampPanel() {
  return (
    <div className="h-[95vh] flex justify-center bg-[#01402D]">
      <div className="h-full flex items-center max-w-7xl px-6 py-14 lg:py-8">
        <div className="w-full justify-center items-center mx-auto lg:mx-0 lg:flex lg:max-w-7xl">
          <div className="text-center lg:w-[39rem]">
            <h1 className="mb-8 text-white text-4xl font-bold lg:text-6xl">
              VocareCamp
            </h1>
            <p className="text-white text-base">
              O VocareCamp é um projeto de apoio e treinamento para Jovens e
              Adolescentes Cristãos que tem fome por Deus e buscam o despertar
              de seu real propósito e vocação na terra, para que o Reino de Deus
              seja expandido através dos seus talentos e aptidões no curso de
              seu desenvolvimento social, material, psicológico e espiritual.
            </p>

            <div className="justify-center items-center gap-2.5 inline-flex mt-8">
              <button className="px-6 py-4 bg-[#D7E9B9] rounded-[7px] justify-center items-center gap-2.5 inline-flex">
                <div className="justify-start items-center gap-2.5 inline-flex">
                  <div className="text-center text-[#121F02] text-base font-medium leading-tight">
                    Entre em Contato
                  </div>
                  <Image src={whatsappLogo} alt="" className="w-6 h-6" />
                </div>
              </button>

              <button className="px-6 py-4 bg-[#D7E9B9] rounded-[7px] justify-center items-center gap-2.5 inline-flex">
                <div className="justify-start items-center gap-2.5 inline-flex">
                  <div className="text-center text-[#121F02] text-base font-medium leading-tight">
                    Saiba Mais
                  </div>
                  <Image src={arrowRight} alt="" className="w-6 h-6" />
                </div>
              </button>
            </div>
          </div>

          <div className="flex justify-center mt-10 lg:mt-0 lg:ml-10">
            <Image
              src={vocareLogo}
              alt=""
              className="h-full w-auto max-h-[25rem] lg:w-auto lg:max-h-[35rem] object-contain rounded-3xl"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export { VocareCampPanel }
