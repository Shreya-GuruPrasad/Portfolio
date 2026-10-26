import { Section } from '@/components/layout/Section'
import { SectionHeader } from '@/components/layout/SectionHeader'
import { skills, skillsIntro } from '@/data/skills'

export function Skills() {
  return (
    <Section id="skills" labelledBy="skills-title" flushTop>
      <SectionHeader eyebrow="Skills" title={skillsIntro.title} titleId="skills-title" />
      <div className="grid gap-x-14 gap-y-9 sm:grid-cols-2">
        {skills.map((group) => {
          const headingId = `skills-${group.title.toLowerCase().replace(/[^a-z]+/g, '-')}`
          return (
            <div key={group.title}>
              <h3 id={headingId} className="mb-3.5 font-serif text-[1.25rem]">
                {group.title}
              </h3>
              <ul aria-labelledby={headingId} className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-pill bg-raise2 px-[13px] py-1.5 text-[0.88rem] text-ink"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>
    </Section>
  )
}
