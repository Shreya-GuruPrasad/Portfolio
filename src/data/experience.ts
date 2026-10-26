import type { WorkRole } from '@/lib/types'

export const experienceIntro = {
  title: "Where I've worked",
}

export const experience: WorkRole[] = [
  {
    id: 'coles',
    company: 'Coles',
    tabLabel: 'Coles',
    title: 'Customer Service Team Member',
    // TODO: start month at Coles
    period: '2026 – Present',
    location: 'Melbourne',
    type: 'Part-time',
    points: [
      'Resolve customer questions and complaints on the spot, often with a queue waiting.',
      'Follow store procedures for refunds, payments and incidents.',
      'Practise the calm, clear communication that audit interviews and incident calls need.',
    ],
  },
  {
    id: 'dokreativ',
    company: 'Dokreativ Technologies',
    tabLabel: 'Dokreativ',
    title: 'Intern, Product Development',
    period: 'Jul 2025 – Jan 2026',
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
    period: 'Feb 2025 – May 2025',
    location: 'Bengaluru',
    points: [
      'Helped develop and test advanced driver-assistance parking features.',
      'Supported functional reliability and safety validation, where every result had to be documented and traceable.',
    ],
  },
]
