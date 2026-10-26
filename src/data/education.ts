import type { Certification, Education } from '@/lib/types'

export const educationIntro = {
  title: "What I've studied",
}

export const education: Education[] = [
  {
    id: 'rmit',
    degree: 'Master of Cyber Security',
    institution: 'RMIT University, Melbourne',
    period: 'Mar 2026 – Present',
    points: [
      'First semester complete',
      'Risk analysis, cryptography and security protocols, secure system design, network defence, traffic analysis',
    ],
  },
  {
    id: 'rnsit',
    degree: 'B.E. Electronics and Communication',
    institution: 'RNS Institute of Technology (VTU), Bengaluru',
    period: 'Graduated Jun 2025',
    points: ['CGPA 8.54 / 10', 'Final-year thesis published by IEEE'],
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
