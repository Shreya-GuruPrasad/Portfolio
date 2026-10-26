import type { CommunityGroup } from '@/lib/types'

export const communityIntro = {
  title: 'Outside the classroom',
  text: 'Where I learn from the security industry, and where I give back.',
}

export const community: CommunityGroup[] = [
  {
    title: 'Tech',
    roles: [
      {
        role: 'Selected mentee, Group Mentoring Program',
        impact:
          'Chosen for the current cohort. I meet regularly with a mentor and peers in security and GRC, and attend AWSN networking events as a student member.',
        org: {
          name: 'Australian Women in Security Network',
          url: 'https://www.awsn.org.au/Web/web/education-training/group-mentoring.aspx?hkey=31fb53e3-6657-4159-a8a5-e7e7e4a4a650',
        },
      },
      {
        role: 'Hackathon participant',
        // TODO: what the team built, and the result
        impact:
          'Two days in a team of four on challenges combining AI security, generative AI and low-resource languages, including prompt injection and data poisoning.',
        org: { name: 'RMIT Hackathon 2026', url: 'https://rmit-hackathon.com/' },
        detail: 'October 2026',
      },
    ],
  },
  {
    title: 'Volunteering',
    roles: [
      {
        role: 'Health education mentor',
        impact:
          'Taught public health to Year 11 students at St Albans Secondary College and guided them as they built their own community projects.',
        org: { name: 'CHASE Program', url: 'https://chaseprogram.org.au/the-chase-program/' },
        detail: '2026',
      },
      {
        role: 'Regular event volunteer',
        impact: 'Help plan and run on-campus events that bring RMIT students together.',
        org: { name: 'RMIT University Student Union (RUSU)' },
      },
      {
        role: 'Volunteer tutor',
        impact: 'Tutored children from underprivileged backgrounds.',
        org: { name: 'U&I' },
        detail: 'Bengaluru',
      },
    ],
  },
  {
    title: 'Cultural',
    roles: [
      {
        role: 'Treasurer',
        impact:
          "Manage the club's budget and keep its finances accurate and transparent for members.",
        org: { name: 'RMIT Kannada Club', url: 'https://campus.hellorubric.com/?s=13945' },
      },
      {
        role: 'Member',
        impact: 'TODO: club name and role',
        org: { name: 'RMIT student club', url: 'https://campus.hellorubric.com/?s=10709' },
      },
      {
        role: 'Committee head, university festival',
        impact:
          'Organised more than 30 cultural events, coordinating logistics across several teams.',
        org: { name: 'RNS Institute of Technology' },
        detail: 'Bengaluru',
      },
    ],
  },
]
