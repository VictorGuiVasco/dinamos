import { HeroComponent } from './components/hero'
import { AboutPanel } from './components/aboutPanel'

import { NavBarComponent } from '@/presentation/components/navBar'

import styles from './styles.module.scss'
import { MissionPanel } from './components/missionPanel'
import { VocareCampPanel } from './components/vocarecampPanel'

function HomePage() {
  return (
    <div className="relative bg-[#fff8f4]">
      <NavBarComponent />
      <HeroComponent />
      <AboutPanel />
      <MissionPanel />
      <VocareCampPanel />
    </div>
  )
}

export { HomePage }
