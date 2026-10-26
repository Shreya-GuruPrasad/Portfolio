import { render } from '@testing-library/react'
import type { ReactNode } from 'react'
import { createMemoryRouter, RouterProvider } from 'react-router'
import { routes } from '@/app/routes'
import { ToastProvider } from '@/components/ui/ToastProvider'

/** Renders a component inside a memory router (and the toast provider) at the given path. */
export function renderWithRouter(ui: ReactNode, { path = '/' }: { path?: string } = {}) {
  const router = createMemoryRouter([{ path: '*', element: <ToastProvider>{ui}</ToastProvider> }], {
    initialEntries: [path],
  })
  return { router, ...render(<RouterProvider router={router} />) }
}

/** Renders the real app routes at the given path. */
export function renderApp(path = '/') {
  const router = createMemoryRouter(routes, { initialEntries: [path] })
  return { router, ...render(<RouterProvider router={router} />) }
}
