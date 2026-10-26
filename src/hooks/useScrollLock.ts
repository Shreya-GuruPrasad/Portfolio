import { useEffect } from 'react'

/** Stops the page from scrolling while `locked` is true, without a layout jump. */
export function useScrollLock(locked: boolean) {
  useEffect(() => {
    if (!locked) return
    const { body, documentElement } = document
    const previous = { overflow: body.style.overflow, paddingRight: body.style.paddingRight }
    const scrollbarWidth = window.innerWidth - documentElement.clientWidth

    body.style.overflow = 'hidden'
    if (scrollbarWidth > 0) body.style.paddingRight = `${scrollbarWidth}px`

    return () => {
      body.style.overflow = previous.overflow
      body.style.paddingRight = previous.paddingRight
    }
  }, [locked])
}
