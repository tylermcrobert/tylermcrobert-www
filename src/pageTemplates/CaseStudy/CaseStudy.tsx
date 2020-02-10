import React from "react"
// eslint-disable-next-line no-unused-vars
import { CaseStudyData } from "../../templates/casestudy"

interface IProps {
  csData: CaseStudyData
}

const CaseStudy: React.FC<IProps> = ({ csData }) => {
  const {
    title: { text: title },
    description: { html: description },
  } = csData.prismicCaseStudy.data

  return (
    <div>
      <h1>{title}</h1>
      {description}
    </div>
  )
}

export default CaseStudy
