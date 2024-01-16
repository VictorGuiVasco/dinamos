import { HeroComponent } from './components/hero'
import { AboutPanel } from './components/aboutPanel'

import { NavBarComponent } from '@/presentation/components/navBar'
import { FooterComponent } from '@/presentation/components/footer'

import { MissionPanel } from './components/missionPanel'
import { VocareCampPanel } from './components/vocarecampPanel'
import { Divider } from './components/divider'
import { InstagramPanel } from './components/instagramPanel'

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
