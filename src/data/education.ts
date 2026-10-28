import type { Certification, Education } from '@/lib/types'

export const educationIntro = {
  title: 'Studies and certifications',
  certificationsTitle: 'Certifications',
}

export const education: Education[] = [
  {
    id: 'rmit',
    degree: 'Master of Cyber Security',
    institution: 'RMIT University, Melbourne',
    period: 'Since Mar 2026',
    points: [
      'GPA 3.8 / 4.0, with High Distinctions in Introduction to Cyber Security, Practical Data Science with Python, and Data Communication & Net-centric Computing',
      'Now studying: Digital Risk Management, Ethical Hacking & Security Testing, Secure Software Systems, Security in Computing & IT',
    ],
  },
  {
    id: 'rnsit',
    degree: 'B.E. Electronics and Communication',
    institution: 'RNS Institute of Technology (VTU), Bengaluru',
    period: 'Graduated Jun 2025',
    points: ['CGPA 8.54 / 10', 'Thesis on an autonomous hospital robot, published by IEEE'],
  },
]

// TODO: optional "Next up" line (ISC2 CC, CompTIA Security+, AZ-900, SC-900) once Shreya confirms.
export const certifications: Certification[] = [
  { name: 'ISO 27001 Lead Auditor', issuer: 'Professional', certified: true },
  { name: 'Cloud Computing', issuer: 'NPTEL', certified: false },
  { name: 'Fundamentals of Network Communication', issuer: 'Coursera', certified: false },
  {
    name: 'Fundamentals of Programming Using Python',
    issuer: 'Infosys Springboard',
    certified: false,
  },
]
