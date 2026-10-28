import { Section } from '@/components/layout/Section'
import { SectionHeader } from '@/components/layout/SectionHeader'
import { PointList } from '@/components/ui/PointList'
import { Tabs } from '@/components/ui/Tabs'
import { experience, experienceIntro } from '@/data/experience'

export function ExperienceTabs() {
  const items = experience.map((role) => ({
    id: role.id,
    label: role.tabLabel,
    content: (
      <>
        <h3 className="font-serif text-[1.6rem] leading-[1.2]">
          {role.title} <span className="text-accent">· {role.company}</span>
        </h3>
        <p className="mt-1.5 mb-5 text-[0.88rem] text-soft">
          {role.period} · {role.location}
        </p>
        <PointList points={role.points} className="max-w-prose" />
      </>
    ),
  }))

  return (
    <Section id="experience" labelledBy="experience-title" band>
      <SectionHeader
        eyebrow="Experience"
        title={experienceIntro.title}
        titleId="experience-title"
      />
      <Tabs label="Employers" items={items} idPrefix="experience" />
    </Section>
  )
}
