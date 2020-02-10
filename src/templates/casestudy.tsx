import React from "react"
import { graphql } from "gatsby"
import { ClientContextProvider } from "components"
import { CaseStudy as CaseStudyTemplate } from "../pageTemplates"

interface IProps {
  data: CaseStudyData
  location: { search: string }
}

const CaseStudy: React.FC<IProps> = ({ data, location }) => {
  return (
    <ClientContextProvider search={location.search}>
      <CaseStudyTemplate csData={data} />
    </ClientContextProvider>
  )
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
