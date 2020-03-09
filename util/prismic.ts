import Prismic from "prismic-javascript"
import Cookies from "js-cookie"

export const apiEndpoint = "https://tylermcrobert.cdn.prismic.io/api/v2"
export const accessToken = ""

export const client = Prismic.client(apiEndpoint, { accessToken })

export const linkResolver = doc => {
  if (doc.type === "case_study") return `/${doc.uid}`
  if (doc.type === "info") return `/info`

  // Fallback for other types, in case new custom types get created
  return `/${doc.uid}`
}

const previewRef = Cookies.get(Prismic.previewCookie)
export const ref = previewRef
