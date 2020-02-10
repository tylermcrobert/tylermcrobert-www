import React from "react"
// eslint-disable-next-line no-unused-vars
import { CaseStudyData } from "../../templates/casestudy"
import { Layout, Html } from "../../components"

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
    </Layout>
  )
}

export default CaseStudy
