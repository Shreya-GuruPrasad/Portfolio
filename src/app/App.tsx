import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { SkipLink } from '@/components/layout/SkipLink'
import { About } from '@/components/home/About'
import { Community } from '@/components/home/Community'
import { Contact } from '@/components/home/Contact'
import { Education } from '@/components/home/Education'
import { ExperienceTabs } from '@/components/home/ExperienceTabs'
import { FactStrip } from '@/components/home/FactStrip'
import { Hero } from '@/components/home/Hero'
import { ProjectsSection } from '@/components/home/ProjectsSection'
import { Skills } from '@/components/home/Skills'
import { ToastProvider } from '@/components/ui/ToastProvider'

export function App() {
  return (
    <ToastProvider>
      <SkipLink />
      <Header />
      <main id="main">
        <Hero />
        <FactStrip />
        <About />
        <ProjectsSection />
        <ExperienceTabs />
        <Education />
        <Skills />
        <Community />
        <Contact />
      </main>
      <Footer />
    </ToastProvider>
  )
}
