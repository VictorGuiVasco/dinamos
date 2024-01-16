import { HeroComponent } from './components/hero'
import { AboutPanel } from './components/aboutPanel'

import { NavBarComponent } from '@/presentation/components/navBar'

import { MissionPanel } from './components/missionPanel'
import { VocareCampPanel } from './components/vocarecampPanel'
import { FooterComponent } from '@/presentation/components/footer'
import { Divider } from './components/divider'

function HomePage() {
  return (
    <div className="relative bg-[#fff8f4]">
      <NavBarComponent />
      <HeroComponent />
      <AboutPanel />

      <Divider />

      <MissionPanel />
      <VocareCampPanel />
      <FooterComponent />
    </div>
  )
}

export { HomePage }
