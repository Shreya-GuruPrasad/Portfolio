import { projects } from './projects'

describe('projects data', () => {
  it('has unique, url-safe slugs', () => {
    const slugs = projects.map((p) => p.slug)
    expect(new Set(slugs).size).toBe(slugs.length)
    slugs.forEach((slug) => expect(slug).toMatch(/^[a-z0-9-]+$/))
  })

  it('has exactly one featured project, with its how-it-works steps', () => {
    const featured = projects.filter((p) => p.tier === 'featured')
    expect(featured).toHaveLength(1)
    expect(featured[0]?.feature?.steps).toHaveLength(4)
  })

  it('gives every coursework project a one-line summary', () => {
    for (const project of projects.filter((p) => p.tier === 'coursework')) {
      expect(project.oneLiner).toBeTruthy()
    }
  })
})
