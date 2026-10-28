import type { Profile } from '@/lib/types'

export const profile: Profile = {
  name: 'Shreya Guru Prasad',
  roleLine: 'Governance, risk & compliance · Melbourne',
  email: 'shreya.guruprasad@gmail.com',
  siteUrl: 'https://shreya-guruprasad.github.io/Portfolio/',
  linkedin: 'https://www.linkedin.com/in/shreya-g-prasad',
  github: 'TODO: GitHub profile URL (probably https://github.com/Shreya-GuruPrasad, confirm)',
  availability: 'Now seeking cyber security internships and junior roles in Melbourne',
  photoAlt: 'Portrait of Shreya Guru Prasad',
  hero: {
    greeting: "Hi, I'm Shreya.",
    headline: {
      lead: 'Curious about systems.',
      emphasis: 'Serious about securing them.',
    },
    lede: "I'm studying cyber security at RMIT with an engineering background and hands-on work in secure software, penetration testing, risk and compliance. I test what should fail, not just what should work, and I'm looking for an internship where I can put that to work.",
    primaryCta: { label: 'See my work', href: '#projects' },
    secondaryCta: { label: 'Get in touch', href: '#contact' },
  },
  facts: [
    { title: 'RMIT University', detail: 'Master of Cyber Security · GPA 3.8 / 4.0' },
    { title: 'ISO 27001', detail: 'Lead Auditor certified' },
    { title: 'Building now', detail: 'AI-assisted ISO 27001 readiness tool' },
  ],
  path: [
    {
      when: 'Now',
      title: 'GPA 3.8 · ISO 27001 Lead Auditor certified',
      detail: 'Building an ISO 27001 readiness tool',
    },
    { when: 'Mar 2026', title: 'Moved to Melbourne', detail: 'Master of Cyber Security, RMIT' },
    {
      when: 'Jul 2025 to Jan 2026',
      title: 'Intern, Dokreativ Technologies',
      detail: 'Product development, security-by-design',
    },
    {
      when: 'Jul 2025',
      title: 'MediAssist published by IEEE',
      detail: 'First author, IEEE ICCAMS 2025',
    },
    { when: 'Jun 2025', title: 'B.E. Electronics & Communication', detail: 'Bengaluru, India' },
    {
      when: 'Feb to May 2025',
      title: 'Intern, Bosch Global Software Technologies',
      detail: 'ADAS parking functions, safety validation',
    },
  ],
  about: {
    title: { lead: 'Learning to protect', emphasis: 'what I used to build.' },
    paragraphs: [
      'In my final year of engineering I built MediAssist, a low-cost robot that delivers medicine through hospital wards on its own, sent off by staff with a tap on their phones. It became my thesis and an IEEE publication. At the same time I was interning at Bosch, testing ADAS parking functions, where "it mostly works" is never good enough.',
      'Working on both, I kept seeing the same thing: the more connected a machine becomes, the more its safety depends on its security. So I decided to learn how to protect the things I had been building.',
      "That decision came with a plane ticket. In early 2026 I moved from Bengaluru to Melbourne to start a Master of Cyber Security at RMIT, in a field I had never formally studied. Today I hold a 3.8 / 4.0 GPA, with High Distinctions in three of my four first-semester subjects, and I'm ISO 27001 Lead Auditor certified.",
      'Engineering turned out to be the best head start. I still think in whole systems, from the sensor to the cloud to the person holding the phone. Much of my work now is about making sure no single person holds too much power: expiring admin rights, a second approver for critical actions, and audit trails that expose tampering.',
    ],
  },
  contact: {
    heading: 'Have a role, or a conversation, in mind?',
    text: 'Engineer by training, with hands-on work in security testing, secure software, risk and compliance. Based in Melbourne and open to cyber security internships and junior roles. Hiring, or just want to talk security? My inbox is open.',
  },
  footer: {
    copyright: '© 2026 · Melbourne',
  },
  seo: {
    title: 'Shreya Guru Prasad | GRC & Cyber Security',
    description:
      'Master of Cyber Security student at RMIT, Melbourne, and ISO 27001 Lead Auditor certified. Open to cyber security internships and junior roles.',
  },
}
