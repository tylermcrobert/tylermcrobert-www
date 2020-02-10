import React from "react"
import { useClientCtx } from "components/ClientContextProvider"
import { Layout, Html } from "components"
// eslint-disable-next-line no-unused-vars
import { CaseStudyData } from "templates/casestudy"

interface IProps {
  csData: CaseStudyData
}

const CaseStudy: React.FC<IProps> = ({ csData }) => {
  const {
    title: { text: title },
    description: { html: description },
  } = csData.prismicCaseStudy.data

  const { getCsIndex } = useClientCtx()
  const index = getCsIndex(csData.prismicCaseStudy.uid)

  return (
    <Layout>
      <h1>
        ({index + 1}){title}
      </h1>
      <Html>{description}</Html>
      <Footer index={index} />
    </Layout>
  )
}

const Footer: React.FC<{ index: number }> = ({ index }) => {
  const { currentCtx, getByUid } = useClientCtx()

  return <div>index:</div>
}
export default CaseStudy
