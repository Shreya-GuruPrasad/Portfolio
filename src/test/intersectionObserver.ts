type Callback = IntersectionObserverCallback

/** A controllable IntersectionObserver for jsdom, which has none. */
export class MockIntersectionObserver {
  static instances: MockIntersectionObserver[] = []
  readonly elements = new Set<Element>()

  private readonly callback: Callback

  constructor(callback: Callback) {
    this.callback = callback
    MockIntersectionObserver.instances.push(this)
  }

  observe = (el: Element) => void this.elements.add(el)
  unobserve = (el: Element) => void this.elements.delete(el)
  disconnect = () => this.elements.clear()
  takeRecords = () => []

  /** Reports the element with this id as intersecting. */
  static enter(id: string) {
    for (const observer of MockIntersectionObserver.instances) {
      const target = [...observer.elements].find((el) => el.id === id)
      if (!target) continue
      const entry = { target, isIntersecting: true } as unknown as IntersectionObserverEntry
      observer.callback([entry], observer as unknown as IntersectionObserver)
    }
  }

  static install() {
    MockIntersectionObserver.instances = []
    vi.stubGlobal('IntersectionObserver', MockIntersectionObserver)
  }
}
