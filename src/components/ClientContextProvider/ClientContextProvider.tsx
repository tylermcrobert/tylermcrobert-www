import React, { createContext, useContext } from "react"
import { useStaticQuery, graphql } from "gatsby"
import parseQs from "util/parseQs"

const DEFAULT_CTX = "homepage"

const query = graphql`
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

/**
 * Types
 */
export interface Title {
  type: string
  text: string
  spans: any[]
}

export interface Meta {
  uid: string
}

export interface CaseStudyItem {
  __typename: string
  title: Title[]
  _meta: Meta
}

export interface CaseStudyList {
  case_study_item: CaseStudyItem
}

export interface Node {
  case_study_list: CaseStudyList[]
  _meta: {
    uid: string
  }
}

export interface Edge {
  node: Node
}

export interface AllContexts {
  edges: Edge[]
}

export interface Prismic {
  allContexts: AllContexts
}

export interface ICtxProviderData {
  prismic: Prismic
}

/**
 *
 */

type CaseStudyInfo = {
  uid: string
  title: string
}

type CtxItem = {
  uid: string
  caseStudies: CaseStudyInfo[]
}

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
  const response: ICtxProviderData = useStaticQuery(query)
  const contexts: CtxItem[] = response.prismic.allContexts.edges
    .map(context => context.node)
    .map(context => ({
      uid: context._meta.uid,
      caseStudies: context.case_study_list
        .map(cs => cs.case_study_item)
        .filter(cs => cs)
        .map(cs => ({
          uid: cs._meta.uid,
          title: cs.title[0].text,
        })),
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
