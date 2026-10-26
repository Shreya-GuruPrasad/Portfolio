import { fileURLToPath, URL } from 'node:url'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import type { Plugin } from 'vite'
import { defineConfig } from 'vitest/config'

/** The two font files used above the fold: Newsreader Light (headings) and Hanken Grotesk 400. */
const PRELOAD_FONTS = [
  /newsreader-latin-300-normal-.*\.woff2$/,
  /hanken-grotesk-latin-400-normal-.*\.woff2$/,
]

/** Adds <link rel="preload"> tags for the hashed font files after the bundle is written. */
function preloadFonts(): Plugin {
  let base = '/'
  return {
    name: 'preload-fonts',
    configResolved(config) {
      base = config.base
    },
    transformIndexHtml: {
      order: 'post',
      handler(_html, ctx) {
        if (!ctx.bundle) return []
        const files = Object.keys(ctx.bundle).filter((name) =>
          PRELOAD_FONTS.some((pattern) => pattern.test(name)),
        )
        return files.map((file) => ({
          tag: 'link',
          attrs: {
            rel: 'preload',
            href: base + file,
            as: 'font',
            type: 'font/woff2',
            crossorigin: '',
          },
          injectTo: 'head',
        }))
      },
    },
  }
}

export default defineConfig({
  base: '/Portfolio/',
  plugins: [react(), tailwindcss(), preloadFonts()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/test/setup.ts'],
    include: ['src/**/*.test.{ts,tsx}'],
    css: false,
    restoreMocks: true,
  },
})
