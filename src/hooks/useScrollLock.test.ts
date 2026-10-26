import { renderHook } from '@testing-library/react'
import { useScrollLock } from './useScrollLock'

describe('useScrollLock', () => {
  it('locks body scroll while active and restores it afterwards', () => {
    const { rerender, unmount } = renderHook(({ locked }) => useScrollLock(locked), {
      initialProps: { locked: true },
    })
    expect(document.body.style.overflow).toBe('hidden')
    rerender({ locked: false })
    expect(document.body.style.overflow).toBe('')
    unmount()
  })
})
