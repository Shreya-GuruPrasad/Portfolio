import { expect, test, type Locator } from '@playwright/test'

/** Links in the projects section that lead to a project detail page. */
const projectLinks = (section: Locator) => section.locator('a[href*="/projects/"]')

test.describe('home page', () => {
  test('loads with the headline and title', async ({ page }) => {
    await page.goto('./')
    await expect(page).toHaveTitle('Shreya Guru Prasad | GRC & Cyber Security')
    await expect(page.getByRole('heading', { level: 1 })).toHaveText(
      'Curious about systems. Serious about securing them.',
    )
  })

  test('filters projects by category and hides empty blocks', async ({ page }) => {
    await page.goto('./')
    const projects = page.getByRole('region', { name: /built and studied/ })
    const coursework = projects.getByRole('heading', { name: 'More coursework' })
    await expect(projectLinks(projects)).toHaveCount(9)

    await projects.getByRole('button', { name: 'Technical' }).click()
    await expect(projectLinks(projects)).toHaveCount(5)
    await expect(projects.getByRole('button', { name: 'Technical' })).toHaveAttribute(
      'aria-pressed',
      'true',
    )

    await projects.getByRole('button', { name: 'Research' }).click()
    await expect(projectLinks(projects)).toHaveCount(1)
    await expect(coursework).toBeHidden()

    await projects.getByRole('button', { name: 'All' }).click()
    await expect(projectLinks(projects)).toHaveCount(9)
    await expect(coursework).toBeVisible()
  })

  test('opens a project page and returns to the projects section', async ({ page }) => {
    await page.goto('./')
    await page.getByRole('link', { name: 'Network security audit and firewall policy' }).click()
    await expect(page).toHaveURL(/projects\/network-audit-firewall-policy$/)
    await expect(page.getByRole('heading', { level: 1 })).toHaveText(
      'Network security audit and firewall policy',
    )
    await expect(page.getByRole('heading', { name: 'Screenshots' })).toHaveCount(0)

    await page.getByRole('link', { name: /Back to projects/ }).click()
    await expect(page).toHaveURL(/#projects$/)
    await expect(page.locator('#projects')).toBeInViewport()
  })

  test('serves project pages on a direct visit', async ({ page }) => {
    await page.goto('projects/mediassist')
    await expect(page.getByRole('heading', { level: 1 })).toHaveText(
      'MediAssist: Autonomous Medicine Delivery Solution for Hospitals',
    )
  })

  test('lazy-loads the About photo', async ({ page }) => {
    await page.goto('./')
    const photo = page.getByRole('img', { name: 'Portrait of Shreya Guru Prasad' })
    await expect(photo).toHaveAttribute('loading', 'lazy')
    await photo.scrollIntoViewIfNeeded()
    await expect(photo).toHaveJSProperty('complete', true)
    await expect(photo).not.toHaveJSProperty('naturalWidth', 0)
  })
})

test.describe('desktop layout', () => {
  test.skip(({ viewport }) => (viewport?.width ?? 0) < 880, 'header links are hidden on mobile')

  test('fits the hero and fact strip in one screen', async ({ page }) => {
    await page.goto('./')
    const strip = page.getByRole('listitem').filter({ hasText: 'Building now' })
    const box = await strip.boundingBox()
    expect((box?.y ?? Infinity) + (box?.height ?? 0)).toBeLessThanOrEqual(900)
  })

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

  for (const width of [360, 390, 768, 1024, 1440]) {
    test(`has no horizontal overflow at ${width}px`, async ({ page }) => {
      await page.setViewportSize({ width, height: 900 })
      for (const path of ['./', 'projects/secure-voting-platform']) {
        await page.goto(path)
        const overflow = await page.evaluate<number>(
          'document.documentElement.scrollWidth - document.documentElement.clientWidth',
        )
        expect(overflow, `${path} at ${width}px`).toBe(0)
      }
    })
  }
})

test.describe('mobile drawer', () => {
  test.skip(({ viewport }) => (viewport?.width ?? 0) >= 880, 'drawer is for small screens')

  test('opens from the left of the name', async ({ page }) => {
    await page.goto('./')
    const menu = await page.getByRole('button', { name: 'Open menu' }).boundingBox()
    const name = await page.getByRole('link', { name: 'Shreya Guru Prasad' }).boundingBox()
    expect(menu?.x ?? Infinity).toBeLessThan(name?.x ?? 0)
  })

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
