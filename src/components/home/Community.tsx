import { Section } from '@/components/layout/Section'
import { SectionHeader } from '@/components/layout/SectionHeader'
import { TextLink } from '@/components/ui/TextLink'
import { community, communityIntro } from '@/data/community'
import { cn } from '@/lib/utils'

export function Community() {
  return (
    <Section id="community" labelledBy="community-title">
      <SectionHeader eyebrow="Community" title={communityIntro.title} titleId="community-title" />
      <ul className="grid tab:grid-cols-2 tab:gap-x-14">
        {community.map((entry, index) => {
          // An odd one out at the end gets its own row, centred under the two columns.
          const loneLast = index === community.length - 1 && index % 2 === 0
          return (
            <li
              key={entry.role + entry.org.name}
              className={cn(
                'border-t border-faint py-6',
                loneLast &&
                  'tab:col-span-full tab:w-[min(100%,560px)] tab:justify-self-center tab:text-center',
              )}
            >
              <p className="text-[1.05rem] font-medium">{entry.role}</p>
              <p className="mt-0.5 text-[0.9rem] text-accent">
                {entry.org.url ? (
                  <TextLink href={entry.org.url}>
                    {entry.org.name} <span aria-hidden="true">↗</span>
                  </TextLink>
                ) : (
                  entry.org.name
                )}
                {entry.detail && ` · ${entry.detail}`}
              </p>
              <p className="mt-2.5 max-w-prose text-soft">{entry.impact}</p>
            </li>
          )
        })}
      </ul>
    </Section>
  )
}
