import { projects } from './projects'

describe('projects data', () => {
  it('has unique, url-safe slugs', () => {
    const slugs = projects.map((p) => p.slug)
    expect(new Set(slugs).size).toBe(slugs.length)
    slugs.forEach((slug) => expect(slug).toMatch(/^[a-z0-9-]+$/))
  })

  it('has exactly one featured project', () => {
    expect(projects.filter((p) => p.featured)).toHaveLength(1)
  })
})
