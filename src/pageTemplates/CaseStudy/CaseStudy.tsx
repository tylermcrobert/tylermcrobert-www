import React from "react"
import { Html } from "components"
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

  const index = 4

  return (
    <>
      <h1>
        ({index + 1}){title}
      </h1>
      <Html>{description}</Html>
      <Footer index={index} />
    </>
  )
}

const Footer: React.FC<{ index: number }> = () => {
  return <div>index:</div>
}
export default CaseStudy
