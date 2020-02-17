import React, { createContext } from "react"
import { WithPicker } from "components"
// eslint-disable-next-line no-unused-vars
import { ICaseStudy } from "templates/casestudy"
// eslint-disable-next-line no-unused-vars
import { IRichText } from "types/prismic"
import { useCuration } from "hooks"
import Slices from "./Slices"
import Header from "./Header"
import S from "./Styled"

const { RichText } = require("prismic-reactjs")

interface IProps {
  csData: ICaseStudy
}

const useIndex = (uid: string): number => {
  const { currentCtx } = useCuration()
  const index = currentCtx.caseStudies.map(item => item.uid).indexOf(uid)
  return index === -1 ? 0 : index
}

export const CaseStudyContext = createContext<{
  title: string
  description: string
  uid: string
  deliverables: string[]
  date: string
  index: number
  intro: IRichText | null
  altText: string
}>({
  title: "",
  description: "",
  uid: "",
  deliverables: [""],
  date: "",
  index: 0,
  intro: null,
  altText: "Tyler McRobert",
})

const CaseStudy: React.FC<IProps> = ({ csData }) => {
  const title = RichText.asText(csData.title)
  const description = RichText.asText(csData.description)
  const { uid } = csData._meta
  const deliverables = csData.deliverables.split(", ")
  const date = csData._meta.firstPublicationDate
  const index = useIndex(uid)
  const { intro } = csData
  const altText = `${title} – Tyler McRobert`

  return (
    <CaseStudyContext.Provider
      value={{
        title,
        description,
        uid,
        deliverables,
        date,
        index,
        intro,
        altText,
      }}
    >
      <WithPicker>
        <Header />
        <S.SliceWrapper>
          <Slices data={csData.cs_content} />
        </S.SliceWrapper>
      </WithPicker>
    </CaseStudyContext.Provider>
  )
}

/**
 * Header
 */

export default CaseStudy
