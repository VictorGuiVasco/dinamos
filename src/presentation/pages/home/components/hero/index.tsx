import Image from 'next/image'

import styles from './styles.module.scss'

import logo from '/public/images/logo.svg'

function HeroComponent() {
  return (
    <div className={`${styles.container} h-dvh`}>
      <div className="relative h-full flex justify-center isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl h-full flex content-center sm:py-16 lg:py-16">
          <Image src={logo} alt="" />
        </div>
      </div>
    </div>
  )
}

export { HeroComponent }
