import Image from 'next/image'
import Link from 'next/link'

import { InstagramLogo, WhatsappLogo } from '@phosphor-icons/react'

import logoMini from '../../assets/logotipo.svg'

function FooterComponent() {
  return (
    <div className="flex justify-center bg-[#272727]">
      <div className="h-full w-full flex flex-col items-center max-w-7xl p-6 lg:py-8">
        <div className="flex lg:flex-1">
          <Link href="#">
            <Image className="w-auto h-[4rem]" src={logoMini} alt="" />
          </Link>
        </div>

        <div className="w-full h-[0px] mt-8 mb-6 border border-zinc-700" />

        <div className="flex mb-6 gap-4 lg:flex-1">
          <Link href="https://wa.me/5592986386131" target="_blank">
            <WhatsappLogo size={32} color="white" />
          </Link>
          <Link
            href="https://www.instagram.com/dinamos_religados/"
            target="_blank"
          >
            <InstagramLogo size={32} color="white" />
          </Link>
        </div>

        <p className="opacity-50 text-center text-white text-[9px] font-normal font-['Roboto'] tracking-tight">
          Copyright © 2024 | All Rights Reserved
          <br />
          Created with love by Victor Guilherme
        </p>
      </div>
    </div>
  )
}

export { FooterComponent }
