import React from "react"
import { Html } from "components"
// eslint-disable-next-line no-unused-vars
import { CaseStudyData } from "templates/casestudy"
import { useClientCtx } from "components/ClientContextProvider"

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

  return { title, description, uid }
}

const CaseStudy: React.FC<IProps> = ({ csData }) => {
  const { title, description, uid } = useParsed(csData)
  const index = useIndex(uid)

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
