import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { ICtxProviderData } from "./types"
import { ContextProvider } from "./CurationProvider"

const curationQuery = graphql`
  {
    prismic {
      allContexts {
        edges {
          node {
            case_study_list {
              case_study_item {
                ... on PRISMIC_Case_study {
                  title
                  _meta {
                    uid
                  }
                }
              }
            }
            _meta {
              uid
            }
          }
        }
      }
    }
  }
`

const DataWrappedContextProvider = ({ ...props }) => {
  return (
    <StaticQuery
      query={curationQuery}
      render={(data: ICtxProviderData) => {
        return <ContextProvider data={data} {...props} />
      }}
    />
  )
}

export default DataWrappedContextProvider
