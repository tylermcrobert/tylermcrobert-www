import React, { createContext, useContext } from "react"
import { useStaticQuery, graphql } from "gatsby"
import parseQs from "util/parseQs"

const DEFAULT_CTX = "homepage"

const query = graphql`
  {
    allPrismicContext {
      edges {
        node {
          data {
            case_study_list {
              case_study_item {
                uid
              }
            }
          }
          uid
        }
      }
    }
  }
`

/**
 * Types
 */

type CtxProviderData = {
  allPrismicContext: {
    edges: {
      node: {
        data: {
          case_study_list: {
            case_study_item: {
              uid: string
            }
          }[]
        }
        uid: string
      }
    }[]
  }
}

type CtxItem = { uid: string; caseStudies: string[] }

interface ICtx {
  contexts: CtxItem[]
  currentCtx: CtxItem
}

const ClientCtx = createContext<ICtx>({
  contexts: [],
  currentCtx: { uid: "", caseStudies: [] },
})

export const useClientCtx = () => useContext(ClientCtx)

interface IProps {
  ctx: string
}

const ClientContextProvider: React.FC<IProps> = ({ children, ctx }) => {
  // data
  const response: CtxProviderData = useStaticQuery(query)
  const contexts = response.allPrismicContext.edges
    .map(item => item.node)
    .map(item => ({
      uid: item.uid,
      caseStudies: item.data.case_study_list.map(cs => cs.case_study_item.uid),
    }))

  // returns only valid ctx
  const currentCtx = (() => {
    const isValid = contexts.map(c => c.uid).indexOf(ctx) !== -1
    const ctxId = isValid ? ctx : DEFAULT_CTX
    return contexts.filter(context => context.uid === ctxId)[0]
  })()

  return (
    <ClientCtx.Provider value={{ contexts, currentCtx }}>
      {children}
    </ClientCtx.Provider>
  )
}

/**
 * Helpers
 */

export const parseSearch = (search: string) =>
  search !== "" ? parseQs(search).c : DEFAULT_CTX

export default ClientContextProvider
