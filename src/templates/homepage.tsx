import React from "react"
import { graphql } from "gatsby"
import { Layout } from "components"
import { parseSearch } from "components/ClientContextProvider"
import { Homepage } from "../pageTemplates"

interface IProps {
  pageContext: { uid: string }
  location: { search: string }
  data: IPrismicContext
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

export interface Meta {
  uid: string
}

export interface Title {
  type: string
  text: string
  spans: any[]
}

export interface Meta2 {
  uid: string
}

export interface CaseStudyItem {
  __typename: string
  title: Title[]
  deliverables: string
  _meta: Meta2
}

export interface CaseStudyList {
  case_study_item: CaseStudyItem
}

export interface Context {
  _meta: Meta
  case_study_list: CaseStudyList[]
}

export interface Prismic {
  context: Context
}

export interface IPrismicContext {
  prismic: Prismic
}

export interface IPrismicHomepageQuery {
  prismic: Prismic
}

export const query = graphql`
  query HomepageQuery($uid: String!) {
    prismic {
      context(lang: "en-us", uid: $uid) {
        _meta {
          uid
        }
        case_study_list {
          case_study_item {
            ... on PRISMIC_Case_study {
              title
              deliverables
              _meta {
                uid
              }
            }
          }
        }
      }
    }
  }
`

export default HomepageContainer
