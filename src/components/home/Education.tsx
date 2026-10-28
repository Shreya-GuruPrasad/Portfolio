import { Section } from '@/components/layout/Section'
import { SectionHeader } from '@/components/layout/SectionHeader'
import { PointList } from '@/components/ui/PointList'
import { certifications, education, educationIntro } from '@/data/education'

export function Education() {
  return (
    <Section id="education" labelledBy="education-title">
      <SectionHeader eyebrow="Education" title={educationIntro.title} titleId="education-title" />

      <div className="grid gap-6 sm:grid-cols-2">
        {education.map((item) => (
          <article key={item.id} className="rounded-card border border-faint p-[26px]">
            <p className="text-[0.84rem] text-accent">{item.period}</p>
            <h3 className="mt-2 mb-1 font-serif text-[1.4rem] leading-[1.25]">{item.degree}</h3>
            <p className="text-[0.95rem] text-soft">{item.institution}</p>
            <PointList points={item.points} className="mt-4 gap-2 text-[0.94rem]" />
          </article>
        ))}
      </div>

      <div className="mt-12">
        <h3
          id="certifications-title"
          className="mb-1.5 text-eyebrow font-medium tracking-[0.14em] text-soft uppercase"
        >
          Certifications
        </h3>
        <ul aria-labelledby="certifications-title">
          {certifications.map((cert) => (
            <li
              key={cert.name}
              className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-b border-faint py-4"
            >
              <span className={cert.certified ? 'font-serif text-[1.2rem]' : 'font-medium'}>
                {cert.name}
                {cert.certified && (
                  <span className="ml-2.5 rounded-pill bg-accent px-2.5 py-0.5 align-[2px] font-sans text-[0.76rem] font-medium text-bg">
                    Certified
                  </span>
                )}
              </span>
              <span className="text-[0.9rem] text-soft">{cert.issuer}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
