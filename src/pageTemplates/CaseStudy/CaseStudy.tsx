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

  return (
    <Layout>
      <h1>{title}</h1>
      <Html>{description}</Html>
      <Footer />
    </Layout>
  )
}

const Footer = () => {
  const { getByUid, currentCtx } = useClientCtx()
  const ctx = getByUid(currentCtx)

  if (!ctx) {
    return null
  }

  const index = ctx.caseStudies.indexOf("den-neuen-stil")
  console.log(index)

  return <div>index: {index}</div>
}
export default CaseStudy
