import { SanityBlockContent, SanityImage, SanityColor } from 'types/sanityTypes'

export type CaseStudyType = {
  _createdAt: string
  _id: string
  _rev: string
  _type: string
  _updatedAt: string
  date?: string
  deliverables?: string[]
  description?: SanityBlockContent
  slug?: { current: string }
  title?: string
  intro?: string
  modules: CaseStudyModule[]
}

export type CaseStudyModule =
  | ModuleSingleImage
  | ModuleDoubleImage
  | ModuleTripleImage
  | ModuleWebsite
  | ModuleText
  | ModuleDynamicImage
  | ModuleSpacer
  | ModuleMobileWebsite
  | TimedSlides

export type ModuleSingleImage = {
  _key: string
  _type: 'singleImage'
  image: SanityImage
}

export type ModuleDoubleImage = {
  _key: string
  _type: 'doubleImage'
  leftImage?: SanityImage
  rightImage?: SanityImage
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

export type WebsiteMedia =
  | {
      _key: string
      _type: 'video'
      video?: {
        url?: string
      }
    }
  | (SanityImage & { _type: 'image' })

export type ModuleWebsite = {
  _key: string
  _type: 'website'
  backgroundColor: {
    _ref: 'ce45323a-b11d-43ae-bcf4-af66f7b99c50'
    _type: 'reference'
  }
  media?: WebsiteMedia[]
  theme?: {
    background?: SanityColor
    dots?: SanityColor
    frame?: SanityColor
  }
  backgroundImg?: SanityImage
  showFrame?: boolean
}

export type ModuleMobileWebsite = {
  _key: string
  _type: 'mobileWebsite'
  frames: (WebsiteMedia & { _key: string })[]
}

export type ModuleText = {
  _key: string
  _type: 'textBlock'
  content?: SanityBlockContent
}

export type ModuleDynamicImage = {
  _key: string
  _type: 'dynamicImage'
  image?: SanityImage
  span?: 'full' | 'half'
  aspect?: number
}

export type ModuleSpacer = {
  _key: string
  _type: 'spacer'
}

export type TimedSlides = {
  _key: string
  _type: 'timedSlides'
  aspect?: number
  images?: SanityImage[]
  seconds?: number
  theme?: { background?: SanityColor }
}
