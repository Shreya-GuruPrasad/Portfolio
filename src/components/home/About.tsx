import { Section } from '@/components/layout/Section'
import { SectionHeader } from '@/components/layout/SectionHeader'
import { profile } from '@/data/profile'
import { ProfilePhoto } from './ProfilePhoto'

export function About() {
  const { about } = profile

  return (
    <Section id="about" labelledBy="about-title">
      <div className="grid items-center gap-8 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] md:gap-12">
        <div>
          <SectionHeader
            eyebrow="About"
            title={
              <>
                {about.title.lead} <em>{about.title.emphasis}</em>
              </>
            }
            titleId="about-title"
          />
          <div className="grid gap-[18px] text-soft">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph} className="max-w-prose">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
        <ProfilePhoto />
      </div>
    </Section>
  )
}
