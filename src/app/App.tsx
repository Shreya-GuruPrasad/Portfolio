import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { SkipLink } from '@/components/layout/SkipLink'
import { ToastProvider } from '@/components/ui/ToastProvider'

export function App() {
  return (
    <ToastProvider>
      <SkipLink />
      <Header />
      <main id="main">Shreya Guru Prasad</main>
      <Footer />
    </ToastProvider>
  )
}
