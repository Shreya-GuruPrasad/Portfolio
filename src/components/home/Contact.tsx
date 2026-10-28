import { Section } from '@/components/layout/Section'
import { Button } from '@/components/ui/Button'
import { profile } from '@/data/profile'
import { useCopyEmail } from '@/hooks/useCopyEmail'
import { isTodo } from '@/lib/utils'

export function Contact() {
  const { contact, email, linkedin } = profile
  const copyEmail = useCopyEmail()

  return (
    <Section id="contact" labelledBy="contact-title" band>
      <div className="mx-auto max-w-[640px] text-center">
        <p className="eyebrow">{contact.eyebrow}</p>
        <h2
          id="contact-title"
          className="mt-3.5 font-serif text-[clamp(2.4rem,6vw,3.8rem)] leading-[1.05] font-light tracking-[-0.025em]"
        >
          {contact.heading}
        </h2>
        <p className="mx-auto mt-5 max-w-[48ch] text-soft">{contact.text}</p>
        <p className="mt-7 font-serif text-[clamp(1.1rem,3.2vw,1.5rem)] [overflow-wrap:anywhere] select-all">
          {email}
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Button onClick={() => void copyEmail()}>Copy email</Button>
          {!isTodo(linkedin) && (
            <Button href={linkedin} variant="ghost">
              LinkedIn
            </Button>
          )}
        </div>
      </div>
    </Section>
  )
}
