import Link from 'next/link'
import Image from 'next/image'

import vocareLogo from '/public/images/vocare-logo.png'

import { ArrowRight, WhatsappLogo } from '@phosphor-icons/react'

function VocareCampPanel() {
  return (
    <div className="flex justify-center bg-[#01402D]">
      <div className="h-full flex items-center max-w-7xl px-6 py-20 lg:py-12">
        <div className="w-full flex flex-col justify-center items-center mx-auto lg:mx-0 lg:flex lg:max-w-7xl">
          <div className="flex justify-center mb-10 lg:mt-0 lg:ml-10">
            <Image
              src={vocareLogo}
              alt=""
              className="h-full w-auto max-w-[16rem] max-h-[25rem] lg:w-auto lg:max-h-[35rem] object-cover rounded-3xl"
            />
          </div>

          <p className="text-white text-base text-center lg:w-[39rem]">
            O VocareCamp é um projeto de apoio e treinamento para Jovens e
            Adolescentes Cristãos que tem fome por Deus e buscam o despertar de
            seu real propósito e vocação na terra, para que o Reino de Deus seja
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
                <div className="text-center text-[#121F02] text-base font-medium leading-tight">
                  Entre em Contato
                </div>
                <WhatsappLogo size={24} color="#121F02" />
              </div>
            </Link>

            <Link
              href="#"
              className="px-6 py-4 bg-[#D7E9B9] rounded-[7px] justify-center items-center gap-2.5 inline-flex"
            >
              <div className="justify-start items-center gap-2.5 inline-flex">
                <div className="text-center text-[#121F02] text-base font-medium leading-tight">
                  Saiba Mais
                </div>
                <ArrowRight size={24} color="#121F02" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export { VocareCampPanel }
