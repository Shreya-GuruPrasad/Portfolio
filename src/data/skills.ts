import type { SkillGroup } from '@/lib/types'

export const skillsIntro = {
  title: 'What I work with',
}

export const skills: SkillGroup[] = [
  {
    title: 'Governance, risk & compliance',
    items: [
      'ISO/IEC 27001:2022',
      'Statement of Applicability',
      'NIST CSF',
      'Essential Eight',
      'Risk registers',
      'Gap analysis',
      'Internal audit',
      'Separation of duties',
      'Privacy Act 1988',
      'NDB scheme',
      'HIPAA',
    ],
  },
  {
    title: 'Security',
    items: [
      'Penetration testing',
      'Threat modelling',
      'Privileged access management',
      'MFA & mTLS',
      'Audit logging',
      'Cryptography',
      'Network security',
      'Prompt-injection security',
    ],
  },
  {
    title: 'Technical',
    items: [
      'Python',
      'Flask',
      'SQL',
      'PHP',
      'Docker',
      'Linux',
      'Git & GitHub Actions',
      'Microsoft Azure',
      'Wireshark',
      'Nmap',
      'Kali Linux',
    ],
  },
  {
    title: 'Languages',
    items: [
      { name: 'English', level: 'Professional' },
      { name: 'German', level: 'Elementary' },
      { name: 'French', level: 'Elementary' },
      { name: 'Kannada', level: 'Native' },
      { name: 'Hindi', level: 'Professional' },
    ],
  },
]
