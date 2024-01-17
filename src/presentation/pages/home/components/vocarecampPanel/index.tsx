import Link from 'next/link'
import Image from 'next/image'

import { PanelVertical } from '@/presentation/components/panel'

import { ArrowRight, WhatsappLogo } from '@phosphor-icons/react'

import vocareLogo from '/public/images/vocare-logo.png'

function VocareCampPanel() {
  return (
    <PanelVertical backgroundColor="#01402D">
      <div className="flex justify-center">
        <Image
          src={vocareLogo}
          alt=""
          className="h-full w-auto max-w-[16rem] max-h-[25rem] lg:w-auto lg:max-h-[35rem] object-cover rounded-3xl"
        />
      </div>

      <p className="text-white text-base text-center max-w-[40rem]">
        O VocareCamp é um projeto de apoio e treinamento para Jovens e
        Adolescentes Cristãos que tem fome por Deus e buscam o despertar de seu
        real propósito e vocação na terra, para que o Reino de Deus seja
        expandido através dos seus talentos e aptidões no curso de seu
        desenvolvimento social, material, psicológico e espiritual.
      </p>

      <div className="justify-center items-center gap-2.5 inline-flex mt-8">
        <Link
          href="https://wa.me/5592986386131"
          target="_blank"
          className="px-6 py-4 bg-[#D7E9B9] rounded-[7px] justify-center items-center gap-2.5 inline-flex"
        >
          <div className="justify-start items-center gap-2.5 inline-flex">
            <p className="text-center text-[#121F02] text-base font-medium leading-none">
              Entre em Contato
            </p>
            <WhatsappLogo size={24} color="#121F02" />
          </div>
        </Link>

        <Link
          href="#"
          className="px-6 py-4 bg-[#D7E9B9] rounded-lg justify-center items-center gap-2.5 inline-flex"
        >
          <div className="justify-start items-center gap-2.5 inline-flex">
            <p className="text-center text-[#121F02] text-base font-medium leading-none">
              Saiba Mais
            </p>
            <ArrowRight size={24} color="#121F02" />
          </div>
        </Link>
      </div>
    </PanelVertical>
  )
}

export { VocareCampPanel }
