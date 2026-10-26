import { expect, test } from '@playwright/test'

test.describe('home page', () => {
  test('loads with the headline and title', async ({ page }) => {
    await page.goto('./')
    await expect(page).toHaveTitle('Shreya Guru Prasad | GRC & Cyber Security')
    await expect(page.getByRole('heading', { level: 1 })).toContainText(
      'understand their security risk',
    )
  })

  test('filters projects by category', async ({ page }) => {
    await page.goto('./')
    const projects = page.getByRole('region', { name: /built and studied/ })
    const cards = projects.getByRole('article')
    await expect(cards).toHaveCount(6)

    await projects.getByRole('button', { name: 'Technical' }).click()
    await expect(cards).toHaveCount(2)
    await expect(projects.getByRole('button', { name: 'Technical' })).toHaveAttribute(
      'aria-pressed',
      'true',
    )

    await projects.getByRole('button', { name: 'All' }).click()
    await expect(cards).toHaveCount(6)
  })

  test('opens a project page and returns to the projects section', async ({ page }) => {
    await page.goto('./')
    await page.getByRole('link', { name: /about Network security audit/ }).click()
    await expect(page).toHaveURL(/projects\/network-audit-firewall-policy$/)
    await expect(page.getByRole('heading', { level: 1 })).toHaveText(
      'Network security audit and firewall policy',
    )

    await page.getByRole('link', { name: /Back to projects/ }).click()
    await expect(page).toHaveURL(/#projects$/)
    await expect(page.locator('#projects')).toBeInViewport()
  })

  test('serves project pages on a direct visit', async ({ page }) => {
    await page.goto('projects/ieee-thesis')
    await expect(page.getByRole('heading', { level: 1 })).toHaveText(
      'Final-year thesis, published by IEEE',
    )
  })
})

test.describe('desktop navigation', () => {
  test.skip(({ viewport }) => (viewport?.width ?? 0) < 880, 'header links are hidden on mobile')

  test('header links scroll to their sections and highlight', async ({ page }) => {
    await page.goto('./')
    const nav = page.getByRole('navigation', { name: 'Main' })
    for (const name of ['Experience', 'Skills', 'Community']) {
      await nav.getByRole('link', { name }).click()
      const section = page.locator(`#${name.toLowerCase()}`)
      await expect(section).toBeInViewport()
      await expect(nav.getByRole('link', { name })).toHaveClass(/bg-raise2/)
    }
  })
})

test.describe('mobile drawer', () => {
  test.skip(({ viewport }) => (viewport?.width ?? 0) >= 880, 'drawer is for small screens')

  test('opens, traps focus, closes with Escape and returns focus', async ({ page }) => {
    await page.goto('./')
    const menuButton = page.getByRole('button', { name: 'Open menu' })
    await menuButton.click()
    const drawer = page.getByRole('dialog', { name: 'Menu' })
    await expect(drawer).toBeInViewport()
    await expect(drawer.getByRole('button', { name: 'Close' })).toBeFocused()

    await page.keyboard.press('Shift+Tab')
    await expect(drawer.getByRole('button', { name: 'Copy email' })).toBeFocused()

    await page.keyboard.press('Escape')
    await expect(menuButton).toHaveAttribute('aria-expanded', 'false')
    await expect(menuButton).toBeFocused()
  })

  test('navigates to a section and closes', async ({ page }) => {
    await page.goto('./')
    await page.getByRole('button', { name: 'Open menu' }).click()
    await page
      .getByRole('navigation', { name: 'Mobile' })
      .getByRole('link', { name: /Education/ })
      .click()
    await expect(page.getByRole('button', { name: 'Open menu' })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
    await expect(page.locator('#education')).toBeInViewport()
  })
})
