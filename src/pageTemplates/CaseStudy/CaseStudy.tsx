import React from "react"
// eslint-disable-next-line no-unused-vars
import { CaseStudyData } from "../../templates/casestudy"
import { Layout } from "../../components"

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
      {description}
    </Layout>
  )
}

export default CaseStudy
