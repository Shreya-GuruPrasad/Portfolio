import { projectsIntro } from '@/data/projects'
import type { HowItWorksStep } from '@/lib/types'

interface HowItWorksProps {
  steps: HowItWorksStep[]
  note: string
}

/** Numbered steps beside the featured project, with a closing note on data handling. */
export function HowItWorks({ steps, note }: HowItWorksProps) {
  return (
    <div className="flex flex-col rounded-[14px] border border-faint bg-bg px-6 py-[22px]">
      <h4 className="mb-1.5 text-[0.74rem] tracking-[0.14em] text-soft uppercase">
        {projectsIntro.howItWorksTitle}
      </h4>
      <ol>
        {steps.map((step, index) => (
          <li
            key={step.title}
            className="grid grid-cols-[34px_minmax(0,1fr)] gap-x-3 border-dashed border-faint py-3.5 not-first:border-t"
          >
            <span
              aria-hidden="true"
              className="row-span-2 grid size-7 place-items-center rounded-full border border-accent font-serif text-[0.95rem] text-accent"
            >
              {index + 1}
            </span>
            <span className="font-medium">{step.title}</span>
            <span className="text-[0.88rem] leading-normal text-soft">{step.text}</span>
          </li>
        ))}
      </ol>
      <p className="mt-auto border-t border-faint pt-3.5 text-[0.82rem] text-soft">{note}</p>
    </div>
  )
}
