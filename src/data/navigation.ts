import type { NavItem } from '@/lib/types'

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
