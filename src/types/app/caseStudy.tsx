import { IPrismicRenderedText } from "../prismic"

export interface ICaseStudy {
  uid: string
  title: string
  deliverables: string[]

  Intro: IPrismicRenderedText
  Description: IPrismicRenderedText
}
