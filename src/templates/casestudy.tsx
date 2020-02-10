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

export type CaseStudyData = {
  prismicCaseStudy: {
    uid: string
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
      uid
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
