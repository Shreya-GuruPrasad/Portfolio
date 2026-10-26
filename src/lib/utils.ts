/** Joins class names, skipping falsy values. */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(' ')
}

/** True when a content value is still a placeholder waiting on Shreya. */
export function isTodo(value: string | undefined): boolean {
  return value === undefined || value.trim().startsWith('TODO:')
}

/** True for absolute http(s) links, which open in a new tab. */
export function isExternal(href: string): boolean {
  return /^https?:\/\//.test(href)
}

/** Path to a project's detail page, relative to the router basename. */
export function projectPath(slug: string): string {
  return `/projects/${slug}`
}
