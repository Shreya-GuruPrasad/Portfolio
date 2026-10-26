import type { RouteObject } from 'react-router'
import { HomePage } from './HomePage'
import { Layout } from './Layout'
import { NotFound } from './NotFound'

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'projects/:slug',
        lazy: async () => {
          const { default: Component } = await import('@/components/project/ProjectDetail')
          return { Component }
        },
      },
      { path: '*', element: <NotFound /> },
    ],
  },
]
