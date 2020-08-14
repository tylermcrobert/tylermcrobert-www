import { SanityBlockContent, SanityImage, SanityColor } from 'types/sanityTypes'

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
  modules: CaseStudyModule[]
}

export type CaseStudyModule =
  | ModuleSingleImage
  | ModuleDoubleImage
  | ModuleTripleImage
  | ModuleWebsite
  | ModuleText

export type ModuleSingleImage = {
  _key: string
  _type: 'singleImage'
  image: SanityImage
}

export type ModuleDoubleImage = {
  _key: string
  _type: 'doubleImage'
  leftImage: SanityImage
  rightImage: SanityImage
  aspect?: number
}

export type ModuleTripleImage = {
  _key: string
  _type: 'tripleImage'
  imageRight: false
  mainImage: SanityImage
  secondaryImage1: SanityImage
  secondaryImage2: SanityImage
}

export type ModuleWebsite = {
  _key: '6996e601d103'
  _type: 'website'
  backgroundColor: {
    _ref: 'ce45323a-b11d-43ae-bcf4-af66f7b99c50'
    _type: 'reference'
  }
  media?: SanityImage[]
  theme?: {
    background?: SanityColor
    dots?: SanityColor
    frame?: SanityColor
  }
}

export type ModuleText = {
  _type: 'text'
  _key: string
}
