import { IPrismicRenderedText } from "../prismic"

export interface ICaseStudy {
  uid: string
  title: string
  intro: IPrismicRenderedText
  deliverables: string[]
  description: IPrismicRenderedText
}
