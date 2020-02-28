import { ICaseStudy } from "../../types/app/caseStudy"
import { ICaseStudy as ICaseStudyRaw } from "../../types/api/PrismicApiCaseStudy"
import { asText, RichText } from "../util/richText"

const formatCaseStudy = (csRaw: ICaseStudyRaw): ICaseStudy => {
  return {
    uid: csRaw.uid,
    title: asText(csRaw.data.title),
    deliverables: csRaw.data.deliverables
      ? csRaw.data.deliverables.split(", ")
      : [""],

    Intro: () => <RichText>{csRaw.data.intro}</RichText>,
    Description: () => <RichText>{csRaw.data.description}</RichText>,
  }
}

export default formatCaseStudy
