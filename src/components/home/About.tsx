import { Section } from '@/components/layout/Section'
import { SectionHeader } from '@/components/layout/SectionHeader'
import { RichText } from '@/components/ui/RichText'
import { profile } from '@/data/profile'

export function About() {
  const { about } = profile

  return (
    <Section id="about" labelledBy="about-title">
      <SectionHeader eyebrow="About" title={about.title} titleId="about-title" />
      <div className="grid content-start gap-[18px] text-soft">
        {about.paragraphs.map((paragraph, index) => (
          <p key={index} className="max-w-prose">
            <RichText value={paragraph} />
          </p>
        ))}
      </div>
    </Section>
  )
}
