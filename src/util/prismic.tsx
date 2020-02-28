import Prismic from "prismic-javascript"

export const apiEndpoint = "https://tylermcrobert.cdn.prismic.io/api/v2"
export const accessToken = ""

const createClientOptions = (req = null, prismicAccessToken = null) => {
  const reqOption = req ? { req } : {}
  const accessTokenOption = prismicAccessToken
    ? { accessToken: prismicAccessToken }
    : {}
  return {
    ...reqOption,
    ...accessTokenOption,
  }
}

export const Client = (req = null) =>
  Prismic.client(apiEndpoint, createClientOptions(req, accessToken))
