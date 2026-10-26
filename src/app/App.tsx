import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { SkipLink } from '@/components/layout/SkipLink'
import { About } from '@/components/home/About'
import { ExperienceTabs } from '@/components/home/ExperienceTabs'
import { FactStrip } from '@/components/home/FactStrip'
import { Hero } from '@/components/home/Hero'
import { ProjectsSection } from '@/components/home/ProjectsSection'
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
      </main>
      <Footer />
    </ToastProvider>
  )
}
