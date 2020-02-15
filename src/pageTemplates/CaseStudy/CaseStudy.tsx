import React from "react"
import { Html, CtxLink, LargeHead, Grid, Section } from "components"
// eslint-disable-next-line no-unused-vars
import { ICaseStudy } from "templates/casestudy"
// eslint-disable-next-line no-unused-vars
import { IRichText } from "types/prismic"
import { useClientCtx } from "components/ClientContextProvider"
import Slices from "./Slices"
import Styled from "./Styled"

const { RichText } = require("prismic-reactjs")

interface IProps {
  csData: ICaseStudy
}

const useIndex = (uid: string): number => {
  const { currentCtx } = useClientCtx()
  const index = currentCtx.caseStudies.map(item => item.uid).indexOf(uid)
  return index === -1 ? 0 : index
}

const CaseStudy: React.FC<IProps> = ({ csData }) => {
  const title = RichText.asText(csData.title)
  const description = RichText.asText(csData.description)
  const { uid } = csData._meta
  const deliverables = csData.deliverables.split(", ")
  const date = csData._meta.firstPublicationDate
  const index = useIndex(uid)
  const { intro } = csData

  return (
    <>
      <Header
        title={title}
        date={date}
        description={description}
        deliverables={deliverables}
        index={index}
        intro={intro}
      />
      <Slices data={csData.cs_content} />

      <Footer index={index} />
    </>
  )
}

/**
 * Header
 */

interface IHeaderProps {
  date: string
  title: string
  intro: IRichText | null
  description: string
  index: number
  deliverables: string[]
}

const NUMBERS = [
  "&#9312;", // 1
  "&#9313;",
  "&#9314;",
  "&#9315;",
  "&#9316;",
  "&#9317;",
  "&#9318;",
  "&#9319;",
  "&#9320;", // 9
]

const Header: React.FC<IHeaderProps> = ({
  date,
  title,
  description,
  index,
  deliverables,
  intro,
}) => {
  return (
    <>
      <Styled.Section>
        <Styled.Title>
          <span>
            CS<Html>{NUMBERS[index]}</Html>
          </span>
          <h1>{title}</h1>
        </Styled.Title>
      </Styled.Section>
      <Styled.LgSection>
        <Grid>
          <Styled.Sidebar>
            <p>{date.replace("+0000", "")}</p>
            <Html>{deliverables.join(" &#9679 ")}</Html>
          </Styled.Sidebar>
          <Styled.Main>
            <LargeHead>
              {intro ? (
                RichText.render(intro)
              ) : (
                <>
                  Aenean lacinia bibendum nulla sed consectetur. Aenean eu leo
                  quam. Pellentesque ornare sem lacinia quam venenatis vesti
                  bulum pharetra nibh.
                </>
              )}
            </LargeHead>
          </Styled.Main>
        </Grid>
      </Styled.LgSection>
      <Section>
        <Grid>
          <Styled.Body>
            <Html>{description}</Html>
          </Styled.Body>
        </Grid>
      </Section>
    </>
  )
}

const Footer: React.FC<{ index: number }> = ({ index }) => {
  const { currentCtx } = useClientCtx()
  const nextIndex = (index + 1) % currentCtx.caseStudies.length
  const nextCs = currentCtx.caseStudies[nextIndex]

  return (
    <div>
      Next: <CtxLink to={`/${nextCs.uid}`}> {nextCs.title}</CtxLink>
    </div>
  )
}
export default CaseStudy
