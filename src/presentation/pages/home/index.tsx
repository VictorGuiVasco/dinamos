import { NavBarComponent } from '@/presentation/components/navBar'
import { HeroComponent } from './components/hero'

import styles from './styles.module.scss'

function HomePage() {
  return (
    <div className={styles.page}>
      <NavBarComponent />
      <HeroComponent />
    </div>
  )
}

export { HomePage }
