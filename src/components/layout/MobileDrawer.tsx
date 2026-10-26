import { useEffect, useRef, type RefObject } from 'react'
import { TextLink } from '@/components/ui/TextLink'
import { drawerNav, socialLinks } from '@/data/navigation'
import { profile } from '@/data/profile'
import { useCopyEmail } from '@/hooks/useCopyEmail'
import { useFocusTrap } from '@/hooks/useFocusTrap'
import { useScrollLock } from '@/hooks/useScrollLock'
import { cn } from '@/lib/utils'

interface MobileDrawerProps {
  id: string
  open: boolean
  onClose: () => void
  activeId: string | null
  /** The button that opened the drawer; focus returns to it on close. */
  returnFocusRef: RefObject<HTMLButtonElement | null>
  /** Builds the href for a home page section. */
  sectionHref: (id: string) => string
}

export function MobileDrawer({
  id,
  open,
  onClose,
  activeId,
  returnFocusRef,
  sectionHref,
}: MobileDrawerProps) {
  const panelRef = useRef<HTMLDivElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const wasOpen = useRef(false)
  const copyEmail = useCopyEmail()
  const [firstName, ...rest] = profile.name.split(' ')

  useScrollLock(open)
  useFocusTrap(panelRef, open)

  useEffect(() => {
    if (open) closeRef.current?.focus()
    else if (wasOpen.current) returnFocusRef.current?.focus()
    wasOpen.current = open
  }, [open, returnFocusRef])

  useEffect(() => {
    if (!open) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open, onClose])

  return (
    <div className="nav:hidden">
      {/* The scrim is a pointer convenience; keyboard users close with Escape or the Close button. */}
      <div
        aria-hidden="true"
        onClick={onClose}
        className={cn(
          'fixed inset-0 z-70 bg-black/55 transition-opacity duration-250',
          open ? 'opacity-100' : 'pointer-events-none opacity-0',
        )}
      />
      <div
        id={id}
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        inert={!open}
        className={cn(
          'fixed inset-y-0 left-0 z-71 flex w-[min(84vw,340px)] flex-col overflow-y-auto border-r border-faint bg-raise',
          'pt-[calc(20px+env(safe-area-inset-top,0px))] pr-6 pb-[calc(24px+env(safe-area-inset-bottom,0px))] pl-[max(24px,env(safe-area-inset-left,0px))]',
          'transition-transform duration-300 ease-[cubic-bezier(.2,.8,.2,1)]',
          open ? 'translate-x-0' : '-translate-x-[102%]',
        )}
      >
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          className="min-h-11 cursor-pointer self-start rounded-pill border border-faint px-4 text-[0.85rem] text-soft hover:text-ink"
        >
          Close
        </button>

        <div className="mt-8">
          <p className="font-serif text-[2rem] leading-[1.05] font-light tracking-[-0.02em]">
            {firstName}
            <br />
            {rest.join(' ')}
          </p>
          <p className="mt-2.5 text-[0.95rem] text-soft">{profile.roleLine}</p>
        </div>

        <nav aria-label="Mobile" className="mt-8 grid">
          {drawerNav.map((item) => (
            <a
              key={item.id}
              href={sectionHref(item.id)}
              onClick={onClose}
              className={cn(
                'flex justify-between border-b border-faint py-[13px] text-[1.05rem] no-underline',
                activeId === item.id && 'text-accent',
              )}
            >
              {item.label}
              <span aria-hidden="true" className="text-soft">
                →
              </span>
            </a>
          ))}
        </nav>

        <div className="mt-auto flex flex-wrap gap-x-5 gap-y-2.5 pt-8 text-[0.92rem] text-soft">
          {socialLinks.map((link) => (
            <TextLink key={link.label} href={link.href} className="py-2.5">
              {link.label}
            </TextLink>
          ))}
          <button
            type="button"
            onClick={() => void copyEmail()}
            className="cursor-pointer py-2.5 underline decoration-faint underline-offset-[5px] hover:decoration-accent"
          >
            Copy email
          </button>
        </div>
      </div>
    </div>
  )
}
