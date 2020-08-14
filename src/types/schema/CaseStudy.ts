import { SanityBlockContent } from 'types/sanityTypes'

export type CaseStudyType = {
  _createdAt: string
  _id: string
  _rev: string
  _type: string
  _updatedAt: string
  date: string
  deliverables: string[]
  description: SanityBlockContent
  slug: { current: string }
  title: string
  intro: string
  modules: CaseStudyModule | CaseStudyModule
}

type CaseStudyModule = ModuleSingleImage

type ModuleSingleImage = { src: string }
