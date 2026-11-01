import { useRef, type CSSProperties, type MouseEvent } from 'react'
import portrait1x from '@/assets/photo/profile-300.webp?no-inline'
import portraitAvif1x from '@/assets/photo/profile-300.avif?no-inline'
import portrait2x from '@/assets/photo/profile-600.webp?no-inline'
import portraitAvif2x from '@/assets/photo/profile-600.avif?no-inline'
import square1x from '@/assets/photo/profile-square-240.webp?no-inline'
import squareAvif1x from '@/assets/photo/profile-square-240.avif?no-inline'
import square2x from '@/assets/photo/profile-square-480.webp?no-inline'
import squareAvif2x from '@/assets/photo/profile-square-480.avif?no-inline'
import { profile } from '@/data/profile'
import { useNearViewport } from '@/hooks/useNearViewport'

const imageSet = (avif1x: string, avif2x: string, webp1x: string, webp2x: string) =>
  `image-set(url("${avif1x}") type("image/avif") 1x, url("${avif2x}") type("image/avif") 2x, ` +
  `url("${webp1x}") type("image/webp") 1x, url("${webp2x}") type("image/webp") 2x)`

/** Read by the .portrait rule in index.css, which picks the crop per breakpoint. */
const sources = {
  '--portrait-tall': imageSet(portraitAvif1x, portraitAvif2x, portrait1x, portrait2x),
  '--portrait-square': imageSet(squareAvif1x, squareAvif2x, square1x, square2x),
} as CSSProperties

const preventMenu = (event: MouseEvent) => event.preventDefault()

/**
 * Shreya's photo: square on phones, 4:5 beside the About text. Drawn as a background so it
 * is not offered as a saveable image, and only fetched once About is near the viewport.
 */
export function ProfilePhoto() {
  const ref = useRef<HTMLDivElement>(null)
  const near = useNearViewport(ref, '300px')

  return (
    <div
      ref={ref}
      role="img"
      aria-label={profile.photoAlt}
      draggable={false}
      onContextMenu={preventMenu}
      style={near ? sources : undefined}
      className="portrait relative aspect-square w-full max-w-[240px] justify-self-start overflow-hidden rounded-card border border-faint bg-raise2 md:aspect-[4/5] md:max-w-[300px] md:justify-self-center"
    >
      <span className="absolute inset-0" />
    </div>
  )
}
