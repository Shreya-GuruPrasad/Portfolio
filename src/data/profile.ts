import type { Profile } from '@/lib/types'

export const profile: Profile = {
  name: 'Shreya Guru Prasad',
  shortName: 'Shreya',
  initials: 'SG',
  roleLine: 'Governance, risk & compliance · Melbourne',
  location: 'Melbourne, Australia',
  email: 'shreya.guruprasad@gmail.com',
  siteUrl: 'https://shreya-guruprasad.github.io/Portfolio/',
  linkedin: 'TODO: LinkedIn profile URL',
  github: 'TODO: GitHub profile URL (probably https://github.com/Shreya-GuruPrasad, confirm)',
  availability: 'Open to GRC internships and graduate roles in Melbourne',
  photo: 'TODO: professional photo',
  hero: {
    greeting: "Hi, I'm Shreya.",
    headline: {
      lead: 'I help organisations understand their security risk, and',
      emphasis: 'do something about it.',
    },
    lede: "I'm an ISO 27001 Lead Auditor and Master of Cyber Security student at RMIT, with an engineering background. I'm looking for my first role in governance, risk and compliance.",
    primaryCta: { label: 'See my work', href: '#projects' },
    secondaryCta: { label: 'Get in touch', href: '#contact' },
  },
  facts: [
    { title: 'ISO 27001', detail: 'Lead Auditor, certified' },
    { title: 'RMIT University', detail: 'Master of Cyber Security' },
    { title: 'IEEE', detail: 'Published undergraduate research' },
    { title: 'AWSN', detail: 'Group Mentoring Program mentee' },
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
    path: [
      {
        when: '2025',
        title: 'B.E. Electronics & Communication',
        detail: 'RNS Institute of Technology, Bengaluru',
      },
      {
        when: '2025',
        title: 'Internships at Bosch and Dokreativ',
        detail: 'Safety validation, then security-by-design',
      },
      { when: '2026', title: 'Moved to Melbourne', detail: 'Master of Cyber Security, RMIT' },
      { when: 'Now', title: 'ISO 27001 Lead Auditor', detail: 'Building my first GRC tool' },
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
