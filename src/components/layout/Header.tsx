import { useCallback, useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router'
import { buttonClasses } from '@/components/ui/buttonStyles'
import { observedSections, sectionNav } from '@/data/navigation'
import { profile } from '@/data/profile'
import { useActiveSection } from '@/hooks/useActiveSection'
import { useScrolled } from '@/hooks/useScrolled'
import { cn } from '@/lib/utils'
import { Container } from './Container'
import { MobileDrawer } from './MobileDrawer'
import { SectionLink } from './SectionLink'

const MENU_ID = 'mobile-menu'
const DESKTOP_QUERY = '(min-width: 55rem)'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const scrolled = useScrolled(8)
  const { pathname } = useLocation()
  const observedId = useActiveSection(observedSections, pathname)
  // Section highlighting only makes sense on the home page.
  const activeId = pathname === '/' ? observedId : null
  const closeMenu = useCallback(() => setMenuOpen(false), [])

  // The drawer only exists on small screens; close it if the window grows past the breakpoint.
  useEffect(() => {
    if (!menuOpen || typeof window.matchMedia !== 'function') return
    const query = window.matchMedia(DESKTOP_QUERY)
    const onChange = () => {
      if (query.matches) setMenuOpen(false)
    }
    query.addEventListener('change', onChange)
    return () => query.removeEventListener('change', onChange)
  }, [menuOpen])

  return (
    <>
      <header
        className={cn(
          'sticky top-0 z-50 border-b bg-bg/88 backdrop-blur-md transition-colors duration-200',
          scrolled ? 'border-faint' : 'border-transparent',
        )}
      >
        <Container className="flex h-15 items-center gap-3 nav:h-header nav:gap-4">
          <button
            ref={menuButtonRef}
            type="button"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            aria-controls={MENU_ID}
            onClick={() => setMenuOpen(true)}
            className="grid size-11 flex-none cursor-pointer place-items-center rounded-full border border-faint nav:hidden"
          >
            <svg width="16" height="12" viewBox="0 0 16 12" aria-hidden="true">
              <path d="M0 1h16M0 6h16M0 11h16" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </button>

          <SectionLink
            sectionId="top"
            className="font-serif text-[1.15rem] whitespace-nowrap no-underline"
          >
            {profile.name}
          </SectionLink>

          <nav aria-label="Main" className="ml-auto hidden gap-1 nav:flex">
            {sectionNav.map((item) => (
              <SectionLink
                key={item.id}
                sectionId={item.id}
                className={cn(
                  'rounded-pill px-3 py-2 text-[0.9rem] no-underline transition-colors duration-200 hover:text-ink',
                  activeId === item.id ? 'bg-raise2 text-ink' : 'text-soft',
                )}
              >
                {item.label}
              </SectionLink>
            ))}
          </nav>

          <div className="hidden nav:block">
            <SectionLink sectionId="contact" className={buttonClasses('primary', 'sm')}>
              Get in touch
            </SectionLink>
          </div>
        </Container>
      </header>

      <MobileDrawer
        id={MENU_ID}
        open={menuOpen}
        onClose={closeMenu}
        activeId={activeId}
        returnFocusRef={menuButtonRef}
      />
    </>
  )
}
