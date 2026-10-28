import type { Profile } from '@/lib/types'

export const profile: Profile = {
  name: 'Shreya Guru Prasad',
  shortName: 'Shreya',
  initials: 'SG',
  roleLine: 'Governance, risk & compliance · Melbourne',
  location: 'Melbourne, Australia',
  email: 'shreya.guruprasad@gmail.com',
  siteUrl: 'https://shreya-guruprasad.github.io/Portfolio/',
  linkedin: 'https://www.linkedin.com/in/shreya-g-prasad',
  github: 'TODO: GitHub profile URL (probably https://github.com/Shreya-GuruPrasad, confirm)',
  availability: 'Now seeking cyber security internships and junior roles in Melbourne',
  photo: 'TODO: professional photo',
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
    title: 'From circuits to controls',
    paragraphs: [
      [
        'I grew up in Bengaluru and studied ',
        { strong: 'Electronics and Communication Engineering' },
        ', where my final-year thesis was published by IEEE. I spent much of my degree organising things too: festival committees, workshops for juniors, and a state-level baseball team.',
      ],
      [
        'At ',
        { strong: 'Bosch' },
        ' I tested parking features for driver-assistance systems. Every result had to be checked, documented and traceable. I found I cared most about the question behind the testing: what could go wrong, and how would we know?',
      ],
      [
        'That question brought me to Melbourne and a ',
        { strong: 'Master of Cyber Security at RMIT' },
        ". In GRC I've found work where technical detail meets real decisions. I'm now a certified ISO 27001 Lead Auditor, and I'm building a tool that helps audit teams prepare for ISO 27001 engagements.",
      ],
    ],
  },
  contact: {
    eyebrow: "What's next?",
    heading: "Let's talk",
    text: "I'm looking for GRC internships, graduate programs and entry-level roles in Melbourne. If your team works on risk, compliance or audit, I'd love to hear from you.",
  },
  footer: {
    tagline: 'Governance, risk and compliance. ISO 27001 Lead Auditor based in Melbourne.',
    copyright: '© 2026 Shreya Guru Prasad',
    place: 'Melbourne, Australia',
  },
  seo: {
    title: 'Shreya Guru Prasad | GRC & Cyber Security',
    description:
      'ISO 27001 Lead Auditor and Master of Cyber Security student at RMIT, Melbourne. Open to GRC internships and graduate roles.',
  },
}
