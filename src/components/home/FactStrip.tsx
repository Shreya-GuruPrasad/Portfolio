import { Container } from '@/components/layout/Container'
import { profile } from '@/data/profile'
import { cn } from '@/lib/utils'

export function FactStrip() {
  return (
    <div className="border-y border-faint">
      <Container>
        <ul className="grid grid-cols-2 md:grid-cols-4">
          {profile.facts.map((fact, index) => (
            <li
              key={fact.title}
              className={cn(
                'border-faint py-[22px] pr-5',
                index % 2 === 1 && 'border-l pl-5',
                index > 0 && 'md:border-l md:pl-5',
                index >= 2 && 'border-t md:border-t-0',
              )}
            >
              <span className="block font-serif text-[1.15rem] leading-[1.3]">{fact.title}</span>
              <span className="text-[0.86rem] text-soft">{fact.detail}</span>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  )
}
