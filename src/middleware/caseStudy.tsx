import { ICaseStudy } from "../../types/app/caseStudy"
import { ICaseStudy as ICaseStudyRaw } from "../../types/api/PrismicApiCaseStudy"
import { asText, RichText } from "../util/richText"

const formatCaseStudy = (csRaw: ICaseStudyRaw): ICaseStudy => {
  return {
    uid: csRaw.uid,
    title: asText(csRaw.data.title),
    intro: RichText(csRaw.data.intro),
    deliverables: csRaw.data.deliverables
      ? csRaw.data.deliverables.split(", ")
      : [""],
    description: RichText(csRaw.data.description),
  }
}

export default formatCaseStudy
