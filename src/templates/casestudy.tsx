import React from "react"
import { graphql } from "gatsby"

interface IProps {
  data: CaseStudy
}
const CaseStudy: React.FC<IProps> = ({ data }) => {
  console.log(data)

  return <div />
}

type CaseStudy = {
  prismicCaseStudy: {
    id: string
  }
}

export const query = graphql`
  query CaseStudy($uid: String) {
    prismicCaseStudy(uid: { eq: $uid }) {
      id
    }
  }
`

export default CaseStudy
