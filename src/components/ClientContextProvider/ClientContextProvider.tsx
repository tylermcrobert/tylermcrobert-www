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

type GetByUidHelper = (uid: string) => CtxItem | void

interface ICtx {
  contexts: CtxItem[]
  getByUid: GetByUidHelper
  currentCtx: string
  getCsIndex: (uid: string) => number
}

/**
 * Context stuff
 */

const ClientCtx = createContext<ICtx>({
  contexts: [],
  getByUid: () => undefined,
  currentCtx: DEFAULT_CTX,
  getCsIndex: () => -1,
})

export const useClientCtx = () => useContext(ClientCtx)

/**
 * Hook
 * returns valid ctx uid
 */

const useCurrentCtx = (search: string, getByUid: GetByUidHelper) => {
  const queryString = search !== "" ? parseQs(search).c : DEFAULT_CTX
  const match = getByUid(queryString)

  if (match) {
    return match.uid
  }

  return DEFAULT_CTX
}

/**
 * Main component
 */

interface IProps {
  search: string
}

const ClientContextProvider: React.FC<IProps> = ({ children, search }) => {
  // data
  const response: CtxProviderData = useStaticQuery(query)
  const contexts = response.allPrismicContext.edges
    .map(item => item.node)
    .map(item => ({
      uid: item.uid,
      caseStudies: item.data.case_study_list.map(cs => cs.case_study_item.uid),
    }))

  // helper function
  const getByUid = (uid: string) => contexts.filter(ctx => ctx.uid === uid)[0]

  // gets current uid from the 'search' object
  const currentCtx = useCurrentCtx(search, getByUid)

  // gets index of a specified uid
  const getCsIndex = (caseStudyUid: string) => {
    const ctx = getByUid(currentCtx)

    if (!ctx) {
      return -1
    }

    return ctx.caseStudies.indexOf(caseStudyUid)
  }

  return (
    <ClientCtx.Provider value={{ contexts, getByUid, currentCtx, getCsIndex }}>
      {children}
    </ClientCtx.Provider>
  )
}

export default ClientContextProvider
