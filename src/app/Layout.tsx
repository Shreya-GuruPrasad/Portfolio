import { Outlet } from 'react-router'
import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { SkipLink } from '@/components/layout/SkipLink'
import { ToastProvider } from '@/components/ui/ToastProvider'
import { useRouteScroll } from '@/hooks/useRouteScroll'

export function Layout() {
  useRouteScroll()

  return (
    <ToastProvider>
      <SkipLink />
      <Header />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
    </ToastProvider>
  )
}
