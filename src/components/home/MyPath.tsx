import { profile } from '@/data/profile'

/** The "My path" timeline, newest first; the filled dot marks where Shreya is now. */
export function MyPath() {
  return (
    <div className="pl-1">
      <p className="eyebrow mb-4">My path</p>
      <ol aria-label="My path" className="grid content-start gap-[15px] border-l border-faint pl-6">
        {profile.path.map((entry) => (
          <li
            key={`${entry.when}-${entry.title}`}
            className="relative before:absolute before:top-2 before:-left-[29px] before:size-[9px] before:rounded-full before:border before:border-accent before:bg-bg first:before:bg-accent"
          >
            <p className="text-[0.76rem] text-accent">{entry.when}</p>
            <p className="text-[0.95rem] leading-[1.35] font-medium">{entry.title}</p>
            <p className="text-[0.84rem] text-soft">{entry.detail}</p>
          </li>
        ))}
      </ol>
    </div>
  )
}
