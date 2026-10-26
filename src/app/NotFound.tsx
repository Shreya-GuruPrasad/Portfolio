import { Link } from 'react-router'
import { Container } from '@/components/layout/Container'
import { buttonClasses } from '@/components/ui/buttonStyles'
import { profile } from '@/data/profile'
import { useDocumentTitle } from '@/hooks/useDocumentTitle'

export function NotFound() {
  useDocumentTitle(`Page not found | ${profile.name}`)

  return (
    <Container className="py-section">
      <div className="max-w-[40rem]">
        <p className="eyebrow">404</p>
        <h1
          tabIndex={-1}
          className="mt-3.5 font-serif text-hero font-light tracking-[-0.025em] focus:outline-none"
        >
          This page <em className="text-accent">doesn't exist.</em>
        </h1>
        <p className="mt-5 max-w-[48ch] text-[1.08rem] text-soft">
          The link may be old or mistyped. Everything on the site starts from the home page.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link to="/" className={buttonClasses()}>
            Go to the home page
          </Link>
          <Link to={{ pathname: '/', hash: 'projects' }} className={buttonClasses('ghost')}>
            See projects
          </Link>
        </div>
      </div>
    </Container>
  )
}
