import React, { useEffect, useRef } from "react"
import { useStaticQuery, graphql, navigate } from "gatsby"
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
      <div>
        {caseStudies.map(({ title, uid }, i) => (
          <li key={title}>
            <LargeHead>
              {" "}
              <Html>{NUMBERS[i]}</Html>&nbsp;
              <CtxLink to={`/${uid}`}>{title}</CtxLink>
            </LargeHead>
          </li>
        ))}
      </div>
    </S.Wrapper>
  )
}

export const WithPicker: React.FC = ({ children }) => {
  const pickerRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const handleScroll = () => {
      if (pickerRef.current) {
        const { y } = pickerRef.current.getBoundingClientRect()
        const isScrolled = Math.floor(y) <= 0

        if (isScrolled) {
          navigate("/")
        }
      }
    }

    document.addEventListener("scroll", handleScroll)

    return () => {
      document.removeEventListener("scroll", handleScroll)
    }
  }, [])
  return (
    <>
      <S.PageWrapper>{children}</S.PageWrapper>
      <S.PickerWrapper ref={pickerRef}>
        <S.FixedPicker>
          <CaseStudyPicker />
        </S.FixedPicker>
      </S.PickerWrapper>
    </>
  )
}

export default CaseStudyPicker
