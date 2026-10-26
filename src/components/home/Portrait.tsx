import { profile } from '@/data/profile'
import { isTodo } from '@/lib/utils'

const frame =
  'relative aspect-square w-full max-w-[300px] overflow-hidden rounded-card border border-faint md:aspect-[4/5] md:max-w-full'

export function Portrait() {
  if (!isTodo(profile.photo)) {
    return (
      <img
        src={profile.photo}
        alt={`Portrait of ${profile.name}`}
        width={800}
        height={1000}
        className={`${frame} object-cover`}
      />
    )
  }

  // Until the photo arrives, show a quiet decorative monogram that screen readers skip.
  return (
    <div
      aria-hidden="true"
      className={`${frame} grid place-items-center bg-linear-160 from-raise2 to-raise`}
    >
      <span className="absolute inset-3.5 rounded-thumb border border-dashed border-faint" />
      <span className="font-serif text-[4.5rem] font-light text-faint italic md:text-[6rem]">
        {profile.initials}
      </span>
    </div>
  )
}
