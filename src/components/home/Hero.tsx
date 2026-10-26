import { Container } from '@/components/layout/Container'
import { Button } from '@/components/ui/Button'
import { profile } from '@/data/profile'
import { Portrait } from './Portrait'

export function Hero() {
  const { hero, availability } = profile

  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="pt-[clamp(56px,9vw,112px)] pb-[clamp(56px,8vw,96px)]"
    >
      <Container className="grid items-center gap-10 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] md:gap-16">
        <div className="fade-up">
          <p className="text-soft">{hero.greeting}</p>
          <h1
            id="hero-title"
            tabIndex={-1}
            className="mt-[18px] font-serif text-hero font-light tracking-[-0.025em] focus:outline-none"
          >
            {hero.headline.lead} <em className="text-accent">{hero.headline.emphasis}</em>
          </h1>
          <p className="mt-[22px] max-w-[52ch] text-[1.08rem] text-soft">{hero.lede}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={hero.primaryCta.href}>{hero.primaryCta.label}</Button>
            <Button href={hero.secondaryCta.href} variant="ghost">
              {hero.secondaryCta.label}
            </Button>
          </div>
          <p className="mt-7 flex items-center gap-2.5 text-[0.9rem] text-soft">
            <span
              aria-hidden="true"
              className="size-2 flex-none rounded-full bg-ok shadow-[0_0_0_4px_color-mix(in_srgb,var(--color-ok)_18%,transparent)]"
            />
            {availability}
          </p>
        </div>
        <Portrait />
      </Container>
    </section>
  )
}
