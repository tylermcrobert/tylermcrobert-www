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
      <Header
        title={title}
        date={date}
        description={description}
        index={index}
      />
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
  index: number
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
}) => {
  const tags = ["lorem", "ipsum dolor", "sit amet", " lorem"]
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
            <Html>{tags.join(" &#9679 ")}</Html>
          </Styled.Sidebar>
          <Styled.Main>
            <LargeHead>
              The rebirth of the imaging and photography brand Fujifilm–Fuji
              Imaging. The rejuvenation of this brand is aimed at reflecting the
              robust creativity.
            </LargeHead>
          </Styled.Main>
        </Grid>
      </Styled.LgSection>
      <Grid>
        <Styled.Body>
          <Html>{description}</Html>
        </Styled.Body>
      </Grid>
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
