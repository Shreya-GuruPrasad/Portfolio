import { Section } from '@/components/layout/Section'
import { SectionHeader } from '@/components/layout/SectionHeader'
import { skills, skillsIntro } from '@/data/skills'

export function Skills() {
  return (
    <Section id="skills" labelledBy="skills-title" band>
      <SectionHeader eyebrow="Skills" title={skillsIntro.title} titleId="skills-title" />
      <div className="grid gap-5 sm:grid-cols-2">
        {skills.map((group) => {
          const headingId = `skills-${group.title.toLowerCase().replace(/[^a-z]+/g, '-')}`
          return (
            <div
              key={group.title}
              className="rounded-[16px] border border-faint bg-raise px-[26px] py-6"
            >
              <h3
                id={headingId}
                className="mb-3.5 font-serif text-[1.5rem] leading-[1.2] font-medium tracking-[-0.01em]"
              >
                {group.title}
              </h3>
              <ul
                aria-labelledby={headingId}
                className="flex max-w-[58ch] flex-wrap items-baseline gap-x-[22px] gap-y-1.5"
              >
                {group.items.map((item) => {
                  const { name, level } = typeof item === 'string' ? { name: item } : item
                  return (
                    <li
                      key={name}
                      className="text-[0.92rem] leading-[1.6] text-soft before:mr-[9px] before:inline-block before:size-[5px] before:-translate-y-px before:rounded-full before:bg-accent before:align-middle"
                    >
                      {name}
                      {level && <small className="ml-1.5 text-[0.86rem]">{level}</small>}
                    </li>
                  )
                })}
              </ul>
            </div>
          )
        })}
      </div>
    </Section>
  )
}
