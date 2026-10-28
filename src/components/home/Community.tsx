import { Fragment } from 'react'
import { Section } from '@/components/layout/Section'
import { SectionHeader } from '@/components/layout/SectionHeader'
import { TextLink } from '@/components/ui/TextLink'
import { community, communityIntro } from '@/data/community'
import { cn, isTodo } from '@/lib/utils'

export function Community() {
  return (
    <Section id="community" labelledBy="community-title">
      <SectionHeader
        eyebrow="Community"
        title={communityIntro.title}
        titleId="community-title"
        aside={communityIntro.text}
      />
      <div className="grid tab:grid-cols-[200px_minmax(0,1fr)] tab:gap-x-12 tab:gap-y-2">
        {community.map((group, groupIndex) => {
          const headingId = `community-${group.title.toLowerCase()}`
          const isLast = groupIndex === community.length - 1
          return (
            <Fragment key={group.title}>
              <h3
                id={headingId}
                className={cn(
                  'font-serif text-[1.3rem] text-accent italic tab:pt-[22px]',
                  groupIndex > 0 && 'pt-9',
                )}
              >
                {group.title}
              </h3>
              <ul
                aria-labelledby={headingId}
                className={cn(!isLast && 'tab:border-b tab:border-faint')}
              >
                {group.roles.map((entry) => (
                  <li
                    key={entry.role + entry.org.name}
                    className="border-faint py-[22px] not-first:border-t"
                  >
                    <p className="text-[1.05rem] font-medium">{entry.role}</p>
                    {!isTodo(entry.impact) && (
                      <p className="mt-1 max-w-prose text-soft">{entry.impact}</p>
                    )}
                    <p className="mt-2 text-[0.86rem] text-soft">
                      {entry.org.url ? (
                        <TextLink href={entry.org.url}>{entry.org.name}</TextLink>
                      ) : (
                        entry.org.name
                      )}
                      {entry.detail && ` · ${entry.detail}`}
                    </p>
                  </li>
                ))}
              </ul>
            </Fragment>
          )
        })}
      </div>
    </Section>
  )
}
