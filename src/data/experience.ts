import type { WorkRole } from '@/lib/types'

export const experienceIntro = {
  title: "Where I've worked",
}

export const experience: WorkRole[] = [
  {
    id: 'dokreativ',
    company: 'Dokreativ Technologies',
    tabLabel: 'Dokreativ',
    title: 'Intern, Product Development',
    period: 'Jul 2025 to Jan 2026',
    location: 'Bengaluru',
    points: [
      'Contributed to secure software development projects.',
      'Applied security-by-design principles across the product development lifecycle.',
    ],
  },
  {
    id: 'bosch',
    company: 'Bosch Global Software Technologies',
    tabLabel: 'Bosch',
    title: 'Intern, ADAS Parking Functions',
    period: 'Feb 2025 to May 2025',
    location: 'Bengaluru',
    points: [
      'Helped develop and test advanced driver-assistance parking features.',
      'Supported functional reliability and safety validation, where every result had to be documented and traceable.',
    ],
  },
]
