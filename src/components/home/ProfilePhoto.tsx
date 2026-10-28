import portrait1x from '@/assets/photo/profile-300.webp?no-inline'
import portraitAvif1x from '@/assets/photo/profile-300.avif?no-inline'
import portrait2x from '@/assets/photo/profile-600.webp?no-inline'
import portraitAvif2x from '@/assets/photo/profile-600.avif?no-inline'
import square1x from '@/assets/photo/profile-square-240.webp?no-inline'
import squareAvif1x from '@/assets/photo/profile-square-240.avif?no-inline'
import square2x from '@/assets/photo/profile-square-480.webp?no-inline'
import squareAvif2x from '@/assets/photo/profile-square-480.avif?no-inline'
import { profile } from '@/data/profile'

/** Matches the md breakpoint, where About switches from one column to two. */
const PHONE = '(max-width: 820px)'

/** Shreya's photo: square on phones, 4:5 beside the About text. Below the fold, so lazy. */
export function ProfilePhoto() {
  return (
    <picture className="block w-full max-w-[240px] justify-self-start overflow-hidden rounded-card border border-faint md:max-w-[300px] md:justify-self-center">
      <source
        media={PHONE}
        type="image/avif"
        srcSet={`${squareAvif1x} 1x, ${squareAvif2x} 2x`}
        width={240}
        height={240}
      />
      <source
        media={PHONE}
        type="image/webp"
        srcSet={`${square1x} 1x, ${square2x} 2x`}
        width={240}
        height={240}
      />
      <source type="image/avif" srcSet={`${portraitAvif1x} 1x, ${portraitAvif2x} 2x`} />
      <img
        src={portrait1x}
        srcSet={`${portrait1x} 1x, ${portrait2x} 2x`}
        alt={profile.photoAlt}
        width={300}
        height={375}
        loading="lazy"
        decoding="async"
        className="block h-auto w-full"
      />
    </picture>
  )
}
