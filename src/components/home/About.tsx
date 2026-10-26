import { Section } from '@/components/layout/Section'
import { SectionHeader } from '@/components/layout/SectionHeader'
import { RichText } from '@/components/ui/RichText'
import { profile } from '@/data/profile'

export function About() {
  const { about } = profile

  return (
    <Section id="about" labelledBy="about-title">
      <SectionHeader eyebrow="About" title={about.title} titleId="about-title" />
      <div className="grid gap-11 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] md:gap-16">
        <div className="grid content-start gap-[18px] text-soft">
          {about.paragraphs.map((paragraph, index) => (
            <p key={index} className="max-w-prose">
              <RichText value={paragraph} />
            </p>
          ))}
        </div>

        <ol
          aria-label="My path"
          className="grid content-start gap-[26px] border-l border-faint pl-6"
        >
          {about.path.map((entry) => (
            <li
              key={`${entry.when}-${entry.title}`}
              className="relative before:absolute before:top-2 before:-left-[29px] before:size-[9px] before:rounded-full before:border before:border-accent before:bg-bg last:before:bg-accent"
            >
              <p className="text-[0.82rem] text-accent">{entry.when}</p>
              <p className="font-medium">{entry.title}</p>
              <p className="text-[0.92rem] text-soft">{entry.detail}</p>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  )
}
