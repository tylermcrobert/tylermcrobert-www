import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { LargeHead, Html, CtxLink } from "components"
import S from "./CaseStudyPicker.Styled"
import { NUMBERS } from "../../constants"

const { RichText } = require("prismic-reactjs")

const dataQuery = graphql`
  {
    prismic {
      allContexts {
        edges {
          node {
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
    }
  }
`

interface IMeta {
  uid: string
}

interface Title {
  type: string
  text: string
  spans: any[]
}

interface ICaseStudyItem {
  __typename: string
  title: Title[]
  deliverables: string
  _meta: IMeta
}

interface ICaseStudyList {
  case_study_item: ICaseStudyItem
}

interface IContext {
  _meta: IMeta
  case_study_list: ICaseStudyList[]
}

interface IPrismicCtxQuery {
  prismic: {
    allContexts: {
      edges: {
        node: IContext
      }[]
    }
  }
}

const CaseStudyPicker = () => {
  const data: IPrismicCtxQuery = useStaticQuery(dataQuery)

  const contexts = data.prismic.allContexts.edges.map(item => ({
    uid: item.node._meta.uid,
    caseStudies: item.node.case_study_list
      .map(cs => cs.case_study_item)
      .filter(cs => cs)
      .map(cs => ({ uid: cs._meta.uid, title: RichText.asText(cs.title) })),
  }))

  const currentCs = contexts.filter(ctx => ctx.uid === "homepage")[0]
  const { caseStudies } = currentCs

  return (
    <S.Wrapper>
      {caseStudies.map(({ title, uid }, i) => (
        <li key={title}>
          <LargeHead>
            {" "}
            <Html>{NUMBERS[i]}</Html>&nbsp;
            <CtxLink to={`/${uid}`}>{title}</CtxLink>
          </LargeHead>
        </li>
      ))}
    </S.Wrapper>
  )
}

export default CaseStudyPicker
