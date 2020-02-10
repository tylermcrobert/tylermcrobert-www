import React from "react"
import { graphql } from "gatsby"
import { Layout } from "components"
import { parseSearch } from "components/ClientContextProvider"
import { Homepage } from "../pageTemplates"

interface IProps {
  pageContext: { uid: string }
  location: { search: string }
  data: HomepageData
}
const HomepageContainer: React.FC<IProps> = ({
  pageContext,
  data,
  location,
}) => {
  return (
    <Layout ctx={pageContext.uid || parseSearch(location.search)}>
      <Homepage data={data} />
    </Layout>
  )
}

export type HomepageData = {
  prismicContext: {
    data: {
      case_study_list: {
        case_study_item: {
          uid: string
          document: {
            data: {
              title: {
                text: string
              }
            }
          }[]
        }
      }[]
    }
  }
}

export const query = graphql`
  query HomepageQuery($uid: String!) {
    prismicContext(uid: { eq: $uid }) {
      data {
        case_study_list {
          case_study_item {
            uid
            document {
              data {
                title {
                  text
                }
              }
            }
          }
        }
      }
    }
  }
`

export default HomepageContainer
