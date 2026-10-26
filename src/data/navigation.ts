import type { Link, NavItem } from '@/lib/types'
import { isTodo } from '@/lib/utils'
import { profile } from './profile'

/** Home page sections shown in the header. */
export const sectionNav: NavItem[] = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'community', label: 'Community' },
]

/** The drawer adds Contact, which the desktop header reaches through its button. */
export const drawerNav: NavItem[] = [...sectionNav, { id: 'contact', label: 'Contact' }]

/** Footer "Explore" column. */
export const footerNav: NavItem[] = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'community', label: 'Community' },
]

/** Sections the header watches to highlight the current link ("top" is the hero). */
export const observedSections: string[] = ['top', ...drawerNav.map((item) => item.id)]

/** LinkedIn and GitHub, leaving out any that are still placeholders. */
export const socialLinks: Link[] = [
  { label: 'LinkedIn', href: profile.linkedin },
  { label: 'GitHub', href: profile.github },
].filter((link) => !isTodo(link.href))
