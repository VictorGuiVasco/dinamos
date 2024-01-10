import { HeroComponent } from './components/hero'
import { AboutPanel } from './components/aboutPanel'

import { NavBarComponent } from '@/presentation/components/navBar'

import styles from './styles.module.scss'

function HomePage() {
  return (
    <div className={styles.page}>
      <NavBarComponent />
      <HeroComponent />
      <AboutPanel />
    </div>
  )
}

export { HomePage }
