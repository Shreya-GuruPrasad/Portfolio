/**
 * Content model for the site. Every fact lives in src/data and is typed here.
 * Missing facts are written as strings starting with "TODO:" (see isTodo in utils).
 */

/** A run of text where some phrases are emphasised (rendered bold). */
export type RichText = ReadonlyArray<string | { strong: string }>

export interface Link {
  label: string
  href: string
}

export interface Fact {
  title: string
  detail: string
}

export interface TimelineEntry {
  when: string
  title: string
  detail: string
}

export interface Profile {
  name: string
  shortName: string
  initials: string
  roleLine: string
  location: string
  email: string
  /** Public site URL with trailing slash. */
  siteUrl: string
  linkedin: string
  github: string
  availability: string
  photo: string
  hero: {
    greeting: string
    headline: { lead: string; emphasis: string }
    lede: string
    primaryCta: Link
    secondaryCta: Link
  }
  facts: Fact[]
  about: {
    title: string
    paragraphs: RichText[]
    path: TimelineEntry[]
  }
  contact: {
    eyebrow: string
    heading: string
    text: string
  }
  footer: {
    tagline: string
    copyright: string
    place: string
  }
  seo: {
    title: string
    description: string
  }
}

export type ProjectCategory = 'grc' | 'technical' | 'research'

export type IllustrationName =
  'readiness' | 'risk-matrix' | 'root-cause' | 'network' | 'crypto' | 'paper'

export interface ProjectImage {
  illustration: IllustrationName
  label: string
}

export interface Screenshot {
  src: string
  alt: string
  width: number
  height: number
}

export interface ProjectLinks {
  github?: string
  paper?: string
}

export interface Project {
  slug: string
  title: string
  category: ProjectCategory
  /** Short label for the card meta row, e.g. "GRC · Healthcare". */
  categoryLabel: string
  /** Where the work happened, e.g. "RMIT" or "Independent project". */
  place: string
  year: string
  /** e.g. "Individual coursework". */
  context?: string
  /** Only for work in progress, e.g. "In progress · target November 2026". */
  status?: string
  summary: string
  problem: string[]
  whatIDid: string[]
  outcome: string[]
  learned: string[]
  tags: string[]
  stack: string[]
  links: ProjectLinks
  featured: boolean
  image: ProjectImage
  screenshots: Screenshot[]
  /** Extra copy used only by the featured card and its detail page. */
  feature?: {
    tagline: string
    pitch: string
    quote: string
    quoteDetail: string
    principles: string[]
    roadmap: string[]
  }
}

export interface WorkRole {
  id: string
  company: string
  /** Label used on the tab. */
  tabLabel: string
  title: string
  period: string
  location: string
  type?: string
  points: string[]
}

export interface Education {
  id: string
  degree: string
  institution: string
  period: string
  points: string[]
}

export interface Certification {
  name: string
  issuer: string
  certified: boolean
}

export interface SkillGroup {
  title: string
  items: string[]
}

export interface CommunityRole {
  role: string
  impact: string
  org: { name: string; url?: string }
  /** Extra detail shown after the organisation, e.g. "2026" or "Bengaluru". */
  detail?: string
}

export interface CommunityGroup {
  title: string
  roles: CommunityRole[]
}

export interface NavItem {
  id: string
  label: string
}
