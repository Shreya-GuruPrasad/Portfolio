import { About } from '@/components/home/About'
import { Community } from '@/components/home/Community'
import { Contact } from '@/components/home/Contact'
import { Education } from '@/components/home/Education'
import { ExperienceTabs } from '@/components/home/ExperienceTabs'
import { FactStrip } from '@/components/home/FactStrip'
import { Hero } from '@/components/home/Hero'
import { ProjectsSection } from '@/components/home/ProjectsSection'
import { Skills } from '@/components/home/Skills'
import { profile } from '@/data/profile'
import { useDocumentTitle } from '@/hooks/useDocumentTitle'

export function HomePage() {
  useDocumentTitle(profile.seo.title, profile.seo.description)

  return (
    <>
      <Hero />
      <FactStrip />
      <ProjectsSection />
      <ExperienceTabs />
      <Education />
      <Skills />
      <Community />
      <About />
      <Contact />
    </>
  )
}
