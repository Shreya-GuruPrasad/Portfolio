/**
 * Content model for the site. Every fact lives in src/data and is typed here.
 * Missing facts are written as strings starting with "TODO:" (see isTodo in utils).
 */

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
  roleLine: string
  email: string
  /** Public site URL with trailing slash. */
  siteUrl: string
  linkedin: string
  github: string
  availability: string
  photoAlt: string
  hero: {
    greeting: string
    headline: { lead: string; emphasis: string }
    lede: string
    primaryCta: Link
    secondaryCta: Link
  }
  facts: Fact[]
  /** "My path" timeline in the hero, newest first. */
  path: TimelineEntry[]
  about: {
    title: { lead: string; emphasis: string }
    paragraphs: string[]
  }
  contact: {
    heading: string
    text: string
  }
  footer: {
    copyright: string
  }
  seo: {
    title: string
    description: string
  }
}

export type ProjectCategory = 'grc' | 'technical' | 'research'

/** Where a project sits on the home page, top to bottom. */
export type ProjectTier = 'featured' | 'highlight' | 'research' | 'coursework'

/** A labelled block under a card's summary, e.g. "Outcome" or "My role". */
export interface ProjectNote {
  label: string
  text: string
}

export interface HowItWorksStep {
  title: string
  text: string
}

export interface ProjectLinks {
  github?: string
  paper?: string
  /** The event a project was built at, e.g. a hackathon site. */
  event?: string
}

export interface Project {
  slug: string
  title: string
  /** Shorter title for the home page card, when it differs from the page title. */
  cardTitle?: string
  category: ProjectCategory
  tier: ProjectTier
  /** Short label for the card meta row, e.g. "Hackathon · Team ULTRON". */
  categoryLabel: string
  /** Where the work happened, e.g. "RMIT". */
  place?: string
  /** When, e.g. "2026" or "Oct 2026". */
  year: string
  /** e.g. "Individual coursework". */
  context?: string
  /** Only for work in progress, e.g. "In progress · target November 2026". */
  status?: string
  summary: string
  /** One line for the compact coursework list. */
  oneLiner?: string
  notes: ProjectNote[]
  problem: string[]
  whatIDid: string[]
  outcome: string[]
  learned: string[]
  /** Shown on the card. */
  tags: string[]
  /** Shown on the detail page. */
  stack: string[]
  links: ProjectLinks
  /** Where the paper is published, shown large on the research card, e.g. IEEE / Xplore. */
  publisher?: { name: string; library: string }
  /** Extra copy used only by the featured card and its detail page. */
  feature?: {
    tagline: string
    pitch: string
    quote: string
    steps: HowItWorksStep[]
    dataNote: string
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

/** A skill, or a language with its level, e.g. { name: 'German', level: 'Elementary' }. */
export type SkillItem = string | { name: string; level: string }

export interface SkillGroup {
  title: string
  items: SkillItem[]
}

export interface CommunityRole {
  role: string
  impact: string
  org: { name: string; url?: string }
  /** Extra detail shown after the organisation, e.g. "2026" or "Melbourne · Part-time". */
  detail?: string
}

export interface NavItem {
  id: string
  label: string
}
