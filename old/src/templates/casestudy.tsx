import React from "react"
import { graphql } from "gatsby"
import { Layout, Seo } from "components"
import { IRichText, IPrismicImage } from "types/prismic"
import { CaseStudy as CaseStudyTemplate } from "../pageTemplates"

interface IProps {
  data: ICaseStudyData
  location: { search: string }
}

const CaseStudy: React.FC<IProps> = ({ data, location }) => (
  <Layout>
    <Seo
      title={data.prismic.case_study.title[0].text}
      path={data.prismic.case_study._meta.uid}
    />
    <CaseStudyTemplate csData={data.prismic.case_study} />
  </Layout>
)

/**
 * Types
 */

interface ISliceBlock {
  __typename: string
}

export interface IText extends ISliceBlock {
  primary: {
    paragraph: IRichText
  }
}

export interface ISingleImage extends ISliceBlock {
  primary: {
    image: IPrismicImage
  }
}

export interface IDoubleImage extends ISliceBlock {
  primary: {
    left_image: IPrismicImage
    right_image: IPrismicImage
  }
}

export interface ITripleImage extends ISliceBlock {
  primary: {
    main_image_position: string
    main_image: IPrismicImage
    secondary_image_1: IPrismicImage
    secondary_image_2: IPrismicImage
  }
}

export interface IWebsite extends ISliceBlock {
  primary: {
    browser_theme: string
    browser_media: { url: string } | null
    browser_image: IPrismicImage | null
    browser_frame_color: string | null
    background_color: string | null
  }
}

export type ISlice = ISingleImage | IDoubleImage | ITripleImage | IText

export interface ICaseStudy {
  title: IRichText
  intro: IRichText | null
  description: IRichText
  deliverables: string
  cs_content: ISlice[]
  _meta: {
    uid: string
    firstPublicationDate: string
  }
}

interface ICaseStudyData {
  prismic: {
    case_study: ICaseStudy
  }
}

export const query = graphql`
  query Query($uid: String!) {
    prismic {
      case_study(lang: "en-us", uid: $uid) {
        cs_content {
          ... on PRISMIC_Case_studyCs_contentSingle_image {
            label
            primary {
              image
            }
          }
          ... on PRISMIC_Case_studyCs_contentDouble_image_block {
            primary {
              left_image
              right_image
            }
          }
          ... on PRISMIC_Case_studyCs_contentTriple_image_block {
            primary {
              main_image
              main_image_position
              secondary_image_1
              secondary_image_2
            }
          }
          ... on PRISMIC_Case_studyCs_contentText {
            primary {
              paragraph
            }
          }
          ... on PRISMIC_Case_studyCs_contentWebsite {
            primary {
              browser_theme
              browser_media {
                ... on PRISMIC__FileLink {
                  url
                }
              }
              browser_image
              browser_frame_color
              background_color
            }
          }
        }
        deliverables
        description
        title
        intro
        _meta {
          uid
          firstPublicationDate
        }
      }
    }
  }
`

export default CaseStudy