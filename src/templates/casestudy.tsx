import React from "react"
import { graphql } from "gatsby"
import { CaseStudy as CaseStudyTemplate } from "../pageTemplates"

interface IProps {
  data: CaseStudyData
}

const CaseStudy: React.FC<IProps> = ({ data }) => {
  return <CaseStudyTemplate csData={data} />
}

export type CaseStudyData = {
  prismicCaseStudy: {
    data: {
      description: {
        html: string
      }
      title: {
        text: string
      }
    }
  }
}

export const query = graphql`
  query CaseStudy($uid: String) {
    prismicCaseStudy(uid: { eq: $uid }) {
      data {
        description {
          html
        }
        title {
          text
        }
      }
    }
  }
`

export default CaseStudy
