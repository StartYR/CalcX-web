export type ShowcaseId = 'exact' | 'graphing' | 'matrix' | 'exchange'

export interface LinkItem {
  label: string
  href: string
  external?: boolean
}

export interface Capability {
  icon: string
  title: string
  description: string
  accent: 'blue' | 'orange' | 'violet' | 'green'
}

export interface ShowcaseItem {
  id: ShowcaseId
  tab: string
  eyebrow: string
  title: string
  description: string
  points: string[]
  lightSrc: string
  darkSrc: string
  alt: string
  fallbackFormula: string
  fallbackLabel: string
}

export interface SiteContent {
  meta: { title: string; description: string }
  nav: {
    links: LinkItem[]
    download: string
    menuOpen: string
    menuClose: string
  }
  hero: {
    eyebrow: string
    titleBefore: string
    titleAccent: string
    titleAfter: string
    description: string
    primaryAction: string
    secondaryAction: string
    visualAlt: string
    visualBadge: string
    floatingFormula: string
  }
  proof: Array<{ value: string; label: string }>
  capabilities: {
    eyebrow: string
    title: string
    description: string
    items: Capability[]
  }
  showcase: {
    eyebrow: string
    title: string
    description: string
    items: ShowcaseItem[]
    imageMissing: string
  }
  experience: {
    eyebrow: string
    title: string
    description: string
    items: Array<{ number: string; title: string; description: string }>
    formulaInput: string
    formulaOutput: string
    formulaLabel: string
  }
  architecture: {
    eyebrow: string
    title: string
    description: string
    steps: Array<{ name: string; detail: string }>
    notes: string[]
  }
  openSource: {
    eyebrow: string
    title: string
    description: string
    primaryAction: string
    secondaryAction: string
    badges: string[]
  }
  download: {
    eyebrow: string
    title: string
    description: string
    appGallery: string
    github: string
    footnote: string
  }
  footer: {
    statement: string
    links: LinkItem[]
    copyrightLabel: string
    copyright: string
  }
  ui: {
    switchLanguage: string
    themeSystem: string
    themeLight: string
    themeDark: string
  }
}
