import { act, renderHook } from '@testing-library/react'
import { useNearViewport } from './useNearViewport'

type Callback = (entries: Pick<IntersectionObserverEntry, 'isIntersecting'>[]) => void

describe('useNearViewport', () => {
  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it('turns true once the element nears the viewport, then stops observing', () => {
    let notify: Callback = () => {}
    const disconnect = vi.fn()
    vi.stubGlobal(
      'IntersectionObserver',
      class {
        constructor(callback: Callback) {
          notify = callback
        }
        observe = vi.fn()
        disconnect = disconnect
      },
    )
    const ref = { current: document.createElement('div') }
    const { result } = renderHook(() => useNearViewport(ref, '300px'))
    expect(result.current).toBe(false)

    act(() => notify([{ isIntersecting: true }]))
    expect(result.current).toBe(true)
    expect(disconnect).toHaveBeenCalled()
  })

  it('is true straight away without IntersectionObserver', () => {
    vi.stubGlobal('IntersectionObserver', undefined)
    const { result } = renderHook(() => useNearViewport({ current: null }, '300px'))
    expect(result.current).toBe(true)
  })
})
