import AxeBuilder from '@axe-core/playwright'
import { expect, test } from '@playwright/test'

const pages = [
  { name: 'home', path: './' },
  { name: 'featured project page', path: 'projects/iso-27001-readiness-tool' },
  { name: 'team project page', path: 'projects/secure-voting-platform' },
  { name: 'research project page', path: 'projects/mediassist' },
  { name: 'not found page', path: 'projects/missing' },
]

for (const { name, path } of pages) {
  test(`${name} has no axe violations`, async ({ page }) => {
    await page.goto(path)
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible()
    // Let the hero entrance animation finish so colours are measured at their final values.
    await page.waitForTimeout(1000)
    const results = await new AxeBuilder({ page }).analyze()
    expect(results.violations).toEqual([])
  })
}

test('mobile drawer has no axe violations when open', async ({ page, viewport }) => {
  test.skip((viewport?.width ?? 0) >= 880, 'drawer is for small screens')
  await page.goto('./')
  await page.getByRole('button', { name: 'Open menu' }).click()
  await page.waitForTimeout(400)
  const results = await new AxeBuilder({ page }).include('#mobile-menu').analyze()
  expect(results.violations).toEqual([])
})

test('projects section has no axe violations when filtered', async ({ page }) => {
  await page.goto('./')
  await page.getByRole('button', { name: 'Research' }).click()
  const results = await new AxeBuilder({ page }).include('#projects').analyze()
  expect(results.violations).toEqual([])
})
