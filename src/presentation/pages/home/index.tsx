import { HeroComponent } from './components/hero'
import { AboutPanel } from './components/aboutPanel'

import { FooterComponent } from '@/presentation/components/footer'

import {
  Divider,
  GroupsPanel,
  InstagramPanel,
  MissionPanel,
  VocareCampPanel,
} from './components/'

function HomePage() {
  return (
    <>
      <HeroComponent />
      <AboutPanel />

      <Divider />

      <MissionPanel />
      <VocareCampPanel />
      <GroupsPanel />
      <InstagramPanel />
    </>
  )
}

export { HomePage }
