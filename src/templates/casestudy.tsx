import React from "react"
import { graphql } from "gatsby"
import { parseSearch } from "components/ClientContextProvider"
import { Layout } from "components"
import { CaseStudy as CaseStudyTemplate } from "../pageTemplates"

interface IProps {
  data: CaseStudyData
  location: { search: string }
}

const CaseStudy: React.FC<IProps> = ({ data, location }) => {
  return (
    <Layout ctx={parseSearch(location.search)}>
      <CaseStudyTemplate csData={data} />
    </Layout>
  )
}

export type SingleImageType = {
  __typename: string
  primary: {
    image: {
      url: string
    }
  }
}

export type DoubleImageType = {
  __typename: string
  primary: {
    left_image: {
      url: string
    }
    right_image: {
      url: string
    }
  }
}

export type TripleImageType = {
  __typename: string
  primary: {
    main_image_position: string
    main_image: {
      url: string
    }
    secondary_image_1: {
      url: string
    }
    secondary_image_2: {
      url: string
    }
  }
}

export type CsContentType = Array<
  SingleImageType | DoubleImageType | TripleImageType
>

export type CaseStudyData = {
  prismicCaseStudy: {
    uid: string
    tags: string[]
    first_publication_date: string
    data: {
      description: {
        html: string
      }
      title: {
        text: string
      }
      cs_content: CsContentType
    }
  }
}

export const query = graphql`
  query CaseStudy($uid: String) {
    prismicCaseStudy(uid: { eq: $uid }) {
      uid
      tags
      first_publication_date
      data {
        description {
          html
        }
        title {
          text
        }
        cs_content {
          ... on PrismicCaseStudyCsContentDoubleImageBlock {
            primary {
              left_image {
                url
              }
              right_image {
                url
              }
            }
          }
          ... on PrismicCaseStudyCsContentSingleImage {
            primary {
              image {
                url
              }
            }
          }
          ... on PrismicCaseStudyCsContentTripleImageBlock {
            primary {
              main_image_position
              main_image {
                url
              }
              secondary_image_1 {
                url
              }
              secondary_image_2 {
                url
              }
            }
          }
          ... on PrismicCaseStudyCsContentWebsite {
            id
            primary {
              browser_theme
              browser_media {
                url
              }
              browser_image {
                url
              }
              browser_frame_color
              background_color
            }
          }
        }
      }
    }
  }
`

export default CaseStudy
