import { footerNav, socialLinks } from '@/data/navigation'
import { profile } from '@/data/profile'
import { useCopyEmail } from '@/hooks/useCopyEmail'
import { isExternal } from '@/lib/utils'
import { NewTabHint } from '@/components/ui/NewTabHint'
import { Container } from './Container'

const headingClass = 'mb-3 text-[0.76rem] font-medium tracking-[0.14em] text-soft uppercase'
const linkClass = 'cursor-pointer text-ink no-underline transition-colors hover:text-accent'

interface FooterProps {
  /** Builds the href for a home page section. */
  sectionHref?: (id: string) => string
}

export function Footer({ sectionHref = (id) => `#${id}` }: FooterProps) {
  const copyEmail = useCopyEmail()

  return (
    <footer className="border-t border-faint pt-12 pb-[calc(40px+env(safe-area-inset-bottom,0px))]">
      <Container>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-[minmax(0,1.4fr)_repeat(2,minmax(0,1fr))]">
          <div className="col-span-full sm:col-span-1">
            <p className="font-serif text-[1.3rem]">{profile.name}</p>
            <p className="mt-2 max-w-[34ch] text-[0.9rem] text-soft">{profile.footer.tagline}</p>
          </div>

          <nav aria-labelledby="footer-explore">
            <h2 id="footer-explore" className={headingClass}>
              Explore
            </h2>
            <ul className="grid gap-2 text-[0.92rem]">
              {footerNav.map((item) => (
                <li key={item.id}>
                  <a href={sectionHref(item.id)} className={linkClass}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className={headingClass}>Connect</h2>
            <ul className="grid gap-2 text-[0.92rem]">
              <li>
                <button type="button" onClick={() => void copyEmail()} className={linkClass}>
                  Email
                </button>
              </li>
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className={linkClass}
                    {...(isExternal(link.href) && { target: '_blank', rel: 'noopener noreferrer' })}
                  >
                    {link.label}
                    {isExternal(link.href) && <NewTabHint />}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap justify-between gap-3 border-t border-faint pt-5 text-[0.82rem] text-soft">
          <span>{profile.footer.copyright}</span>
          <span>{profile.footer.place}</span>
        </div>
      </Container>
    </footer>
  )
}
