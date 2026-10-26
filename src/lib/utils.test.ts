import { cn, isExternal, isTodo } from './utils'

describe('cn', () => {
  it('joins truthy class names', () => {
    expect(cn('a', false, null, undefined, 'b')).toBe('a b')
  })
})

describe('isTodo', () => {
  it('flags placeholders and missing values', () => {
    expect(isTodo('TODO: LinkedIn URL')).toBe(true)
    expect(isTodo(undefined)).toBe(true)
    expect(isTodo('https://example.com')).toBe(false)
  })
})

describe('isExternal', () => {
  it('detects absolute http links', () => {
    expect(isExternal('https://ieeexplore.ieee.org')).toBe(true)
    expect(isExternal('#contact')).toBe(false)
    expect(isExternal('/projects/x')).toBe(false)
  })
})
