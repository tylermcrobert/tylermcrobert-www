import { graphql } from "gatsby"

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

export default curationQuery
