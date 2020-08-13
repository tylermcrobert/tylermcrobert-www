import { SanityDocument } from '@sanity/client'
import { SanitySlug } from 'types/sanityTypes'

export type CsContext = {
  caseStudies: { slug: SanitySlug; title: string }[]
  title: string
  slug: SanitySlug
} & SanityDocument
