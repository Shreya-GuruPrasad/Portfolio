import { sectionNav, socialLinks } from '@/data/navigation'
import { profile } from '@/data/profile'
import { useCopyEmail } from '@/hooks/useCopyEmail'
import { NewTabHint } from '@/components/ui/NewTabHint'
import { Container } from './Container'
import { SectionLink } from './SectionLink'

const linkClass =
  'inline-flex min-h-11 cursor-pointer items-center text-soft no-underline transition-colors hover:text-ink tab:min-h-0'

export function Footer() {
  const copyEmail = useCopyEmail()

  return (
    <footer className="border-t border-faint pt-12 pb-[calc(40px+env(safe-area-inset-bottom,0px))]">
      <Container className="flex flex-col items-start gap-x-8 gap-y-4 tab:flex-row tab:flex-wrap tab:items-center tab:justify-between">
        <p className="font-serif text-[1.2rem] whitespace-nowrap">{profile.name}</p>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap items-center gap-x-[22px] gap-y-2 text-[0.9rem]">
            {sectionNav.map((item) => (
              <li key={item.id}>
                <SectionLink sectionId={item.id} className={linkClass}>
                  {item.label}
                </SectionLink>
              </li>
            ))}
            <li aria-hidden="true" className="hidden h-3.5 w-px bg-faint tab:block" />
            <li>
              <button type="button" onClick={() => void copyEmail()} className={linkClass}>
                Email
              </button>
            </li>
            {socialLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
                  {link.label}
                  <NewTabHint />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <p className="text-[0.82rem] whitespace-nowrap text-soft">{profile.footer.copyright}</p>
      </Container>
    </footer>
  )
}
