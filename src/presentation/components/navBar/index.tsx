import { useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

import logoMini from '../../assets/logotipo.svg'

const navigation = [
  { name: 'VocareCamp', href: '#', current: true },
  { name: 'Blog', href: '#', current: false },
  { name: 'Localização', href: '#', current: false },
]

function NavBarComponent() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="flex justify-center absolute inset-x-0 top-0 z-50 bg-[#FFF8F4]">
      <nav
        className="flex items-center justify-between p-6 lg:px-8 w-full max-w-7xl"
        aria-label="Global"
      >
        <div className="flex lg:flex-1 h-[3.125rem]">
          <Link href="#" className="-m-1.5 p-1.5 ">
            <Image className=" w-auto h-[3.125rem]" src={logoMini} alt="" />
          </Link>
        </div>

        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-base font-semibold leading-6 text-gray-900"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </nav>

      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="#" className="-m-1.5 p-1.5">
              <Image className="h-[3.125rem] w-auto" src={logoMini} alt="" />
            </Link>

            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}

export { NavBarComponent }
