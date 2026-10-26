import { illustrations } from '@/assets/illustrations'
import type { ProjectImage } from '@/lib/types'

interface ProjectThumbProps {
  image: ProjectImage
  /** Load immediately when the thumbnail is likely above the fold. */
  eager?: boolean
}

export function ProjectThumb({ image, eager }: ProjectThumbProps) {
  return (
    <div className="relative aspect-[16/10] overflow-hidden rounded-thumb border border-faint bg-raise2">
      <img
        src={illustrations[image.illustration]}
        alt=""
        width={320}
        height={200}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
        className="block size-full"
      />
      <span className="absolute bottom-2.5 left-3 rounded-pill bg-bg/70 px-[9px] py-[3px] text-[0.74rem] text-soft">
        {image.label}
      </span>
    </div>
  )
}
