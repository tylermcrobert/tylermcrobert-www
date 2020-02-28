import { IPrismicRichText } from "../prismic"

export interface ICaseStudy {
  uid: string
  title: string
  intro: React.FC
  deliverables: string[]
  description: IPrismicRichText
}
