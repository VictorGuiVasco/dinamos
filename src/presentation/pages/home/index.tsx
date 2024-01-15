import { HeroComponent } from './components/hero'
import { AboutPanel } from './components/aboutPanel'

import { NavBarComponent } from '@/presentation/components/navBar'

import styles from './styles.module.scss'
import { MissionPanel } from './components/missionPanel'

function HomePage() {
  return (
    <div className={styles.page}>
      <NavBarComponent />
      <HeroComponent />
      <AboutPanel />
      <MissionPanel />
    </div>
  )
}

export { HomePage }
