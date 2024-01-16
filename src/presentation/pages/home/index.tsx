import { HeroComponent } from './components/hero'
import { AboutPanel } from './components/aboutPanel'

import { NavBarComponent } from '@/presentation/components/navBar'

import { MissionPanel } from './components/missionPanel'
import { VocareCampPanel } from './components/vocarecampPanel'
import { FooterComponent } from '@/presentation/components/footer'

function HomePage() {
  return (
    <div className="relative bg-[#fff8f4]">
      <NavBarComponent />
      <HeroComponent />
      <AboutPanel />
      <MissionPanel />
      <VocareCampPanel />
      <FooterComponent />
    </div>
  )
}

export { HomePage }
