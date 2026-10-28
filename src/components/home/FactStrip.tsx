import { Container } from '@/components/layout/Container'
import { profile } from '@/data/profile'

export function FactStrip() {
  return (
    <div className="border-y border-faint">
      <Container>
        <ul className="grid text-center sm:grid-cols-3">
          {profile.facts.map((fact) => (
            <li
              key={fact.title}
              className="border-faint py-4 not-first:border-t sm:px-5 sm:py-[18px] sm:not-first:border-t-0 sm:not-first:border-l"
            >
              <span className="block font-serif text-[1.15rem] leading-[1.3]">{fact.title}</span>
              <span className="block text-[0.86rem] leading-normal text-soft">{fact.detail}</span>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  )
}
