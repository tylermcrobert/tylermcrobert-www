import React from "react"
import Router from "next/router"
import { client, linkResolver } from "../util/prismic"

const Preview = () => {
  return <div>Loading preview...</div>
}

Preview.getInitialProps = async context => {
  try {
    const { token } = context.query
    const { res, req } = context

    const url = await client.previewSession(token, linkResolver, "/")
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
