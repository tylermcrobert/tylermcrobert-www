import React from "react"
import { Html, CtxLink, LargeHead, MediumHead, Grid } from "components"
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
  const { uid, data } = csData.prismicCaseStudy
  const {
    title: { text: title },
    description: { html: description },
  } = data

  return { title, description, uid, data }
}

const CaseStudy: React.FC<IProps> = ({ csData }) => {
  const { title, description, uid, data } = useParsed(csData)
  const index = useIndex(uid)

  return (
    <>
      <Styled.ColorBlock background="#fff">
        <Grid>
          <Styled.Left>
            <p>Published</p>

            <p>2018-06-30T02:19:59</p>

            <br />
            <p>Tagged</p>

            <p>● Graphic Design </p>
            <p>● Web Development</p>
            <p>● Creative Direction</p>
          </Styled.Left>
          <Styled.Span>
            <LargeHead>{title}</LargeHead>
          </Styled.Span>
        </Grid>
      </Styled.ColorBlock>
      <Styled.ColorBlock background="#fff">
        <Grid>
          <Styled.Span>
            <MediumHead>
              <Html>{description}</Html>
            </MediumHead>
          </Styled.Span>
        </Grid>
      </Styled.ColorBlock>
      <Grid>
        <Styled.Text>
          <Html>{description}</Html>
        </Styled.Text>
      </Grid>
      <Slices data={data.cs_content} />
      <Footer index={index} />
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
