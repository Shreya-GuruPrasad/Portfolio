import type { CommunityRole } from '@/lib/types'

export const communityIntro = {
  title: 'Outside the classroom',
}

export const community: CommunityRole[] = [
  {
    role: 'Customer service team member',
    impact:
      'Resolve customer questions and complaints on the spot, often with a queue waiting, while following store procedures for refunds, payments and incidents.',
    org: { name: 'Coles' },
    detail: 'Melbourne · Part-time',
  },
  {
    role: 'Health education mentor',
    impact:
      'Taught public health to Year 11 students at St Albans Secondary College and guided them as they built their own community projects.',
    org: { name: 'CHASE Program', url: 'https://chaseprogram.org.au/the-chase-program/' },
    detail: '2026',
  },
  {
    role: 'Part of the Group Mentoring Program',
    impact:
      'In the current cohort, I meet regularly with a mentor and peers in security and GRC, and attend networking events as a student member.',
    org: {
      name: 'Australian Women in Security Network',
      url: 'https://www.awsn.org.au/Web/web/education-training/group-mentoring.aspx?hkey=31fb53e3-6657-4159-a8a5-e7e7e4a4a650',
    },
  },
  {
    role: 'Treasurer',
    impact: "Manage the club's budget and keep its finances accurate and transparent for members.",
    org: { name: 'RMIT Kannada Club', url: 'https://campus.hellorubric.com/?s=13945' },
  },
  {
    role: 'Regular event volunteer',
    impact: 'Help plan and run on-campus events that bring RMIT students together.',
    org: { name: 'RMIT University Student Union (RUSU)' },
  },
]
