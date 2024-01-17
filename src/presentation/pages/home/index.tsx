import { HeroComponent } from './components/hero'
import { AboutPanel } from './components/aboutPanel'

import { NavBarComponent } from '@/presentation/components/navBar'
import { FooterComponent } from '@/presentation/components/footer'

import {
  Divider,
  InstagramPanel,
  MissionPanel,
  VocareCampPanel,
} from './components/'

function HomePage() {
  return (
    <div className="relative bg-[#fff8f4]">
      <NavBarComponent />
      <HeroComponent />
      <AboutPanel />

      <Divider />

      <MissionPanel />
      <VocareCampPanel />
      <InstagramPanel />
      <FooterComponent />
    </div>
  )
}

export { HomePage }
