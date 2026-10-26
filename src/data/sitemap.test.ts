import sitemap from '../../public/sitemap.xml?raw'
import { profile } from './profile'
import { projects } from './projects'

describe('sitemap.xml', () => {
  it('lists the home page and every project page', () => {
    expect(sitemap).toContain(`<loc>${profile.siteUrl}</loc>`)
    for (const project of projects) {
      expect(sitemap).toContain(`<loc>${profile.siteUrl}projects/${project.slug}</loc>`)
    }
  })
})
