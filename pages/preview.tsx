import React from "react"

import Router from "next/router"
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

export const linkResolver = doc => {
  if (doc.type === "case_study") return `/${doc.uid}`
  if (doc.type === "info") return `/info`

  // Fallback for other types, in case new custom types get created
  return `/${doc.uid}`
}

const Preview = () => {
  return <div>Loading preview...</div>
}

Preview.getInitialProps = async context => {
  try {
    const { token } = context.query
    const { res, req } = context

    const url = await Client(req).previewSession(token, linkResolver, "/")
    if (res) {
      res.writeHead(302, { Location: url })
      res.end()
    } else {
      Router.push(url)
    }
  } catch (e) {
    console.error(e)
  }
  return {}
}

export default Preview
