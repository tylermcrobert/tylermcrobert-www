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
