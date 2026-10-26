import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { SkipLink } from '@/components/layout/SkipLink'
import { Hero } from '@/components/home/Hero'
import { ToastProvider } from '@/components/ui/ToastProvider'

export function App() {
  return (
    <ToastProvider>
      <SkipLink />
      <Header />
      <main id="main">
        <Hero />
      </main>
      <Footer />
    </ToastProvider>
  )
}
