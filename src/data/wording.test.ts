/**
 * Guards the site's wording rules (docs: no em or en dashes; ranges use "to" and "Since").
 * Scans the raw source of every data file, so new copy is checked as soon as it is added.
 */
const sources = Object.entries(
  import.meta.glob<string>('./*.ts', { query: '?raw', import: 'default', eager: true }),
).filter(([path]) => !path.endsWith('.test.ts'))

const banned: Array<[string, RegExp]> = [
  ['an em or en dash', /[–—]/],
  ['"Let\'s talk"', /let's talk/i],
  ['"Thanks for reading"', /thanks for reading/i],
  ['"Glad you stopped by"', /glad you stopped by/i],
  ['"Hiring in cyber security?"', /hiring in cyber security\?/i],
  ['"I\'d love to hear from you"', /i'd love to hear from you/i],
  ['a mention of project work', /project work/i],
  ['a résumé', /r[eé]sum[eé]|\bcv\b/i],
  ['a transcript', /transcript/i],
  ['a phone number', /(\+61|\+91|\b04\d{2})[\d ]{6,}/],
  ['a student ID', /\bs\d{7}\b/i],
]

describe('site wording', () => {
  it('scans the data files', () => {
    expect(sources.map(([path]) => path)).toContain('./profile.ts')
  })

  it.each(sources)('%s has no banned wording', (_path, source) => {
    for (const [what, pattern] of banned) {
      expect(source, `found ${what}`).not.toMatch(pattern)
    }
  })

  it.each(sources)('%s only calls her "ISO 27001 Lead Auditor certified"', (_path, source) => {
    // The certifications list may name the credential itself.
    const prose = source.replace(/name: 'ISO 27001 Lead Auditor'/g, '')
    expect(prose).not.toMatch(/Lead Auditor(?! certified)/)
  })
})
