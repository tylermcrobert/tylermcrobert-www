import React from "react"
import { Html, CtxLink, LargeHead, Grid } from "components"
// eslint-disable-next-line no-unused-vars
import { CaseStudyData } from "templates/casestudy"
import { useClientCtx } from "components/ClientContextProvider"
import Slices from "./Slices"
import Styled from "./Styled"

interface IProps {
  csData: CaseStudyData
}

const useIndex = (uid: string): number => {
  const { currentCtx } = useClientCtx()
  const index = currentCtx.caseStudies.indexOf(uid)
  return index === -1 ? 0 : index
}

const useParsed = (csData: CaseStudyData) => {
  const {
    uid,
    data,
    first_publication_date: date,
    tags,
  } = csData.prismicCaseStudy
  const {
    title: { text: title },
    description: { html: description },
  } = data

  return { title, description, uid, data, date, tags }
}

const CaseStudy: React.FC<IProps> = ({ csData }) => {
  const { title, description, uid, data, date } = useParsed(csData)
  const index = useIndex(uid)

  return (
    <>
      <Header title={title} date={date} description={description} />
      <Slices data={data.cs_content} />
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
  description: string
}

const Header: React.FC<IHeaderProps> = ({ date, title, description }) => {
  const tags = ["lorem", "ipsum dolor", "sit amet", " lorem"]
  return (
    <>
      <Styled.Section>
        <Styled.Title>
          <h1>{title}</h1>
        </Styled.Title>
      </Styled.Section>
      <Styled.Section>
        <Grid>
          <Styled.Sidebar>
            <p>{date.replace("+0000", "")}</p>
            <Html>{tags.join(" &#9679 ")}</Html>
          </Styled.Sidebar>
          <Styled.Main>
            <LargeHead>
              Cum sociis natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus.
            </LargeHead>
          </Styled.Main>
        </Grid>
      </Styled.Section>

      <Html>{description}</Html>
    </>
  )
}

const Footer: React.FC<{ index: number }> = ({ index }) => {
  const { currentCtx } = useClientCtx()
  const nextIndex = (index + 1) % currentCtx.caseStudies.length
  const nextCs = currentCtx.caseStudies[nextIndex]

  return (
    <div>
      Next: <CtxLink to={`/${nextCs}`}> {nextCs}</CtxLink>
    </div>
  )
}
export default CaseStudy
