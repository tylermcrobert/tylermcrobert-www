import React from "react"
import { Client, linkResolver } from "util/prismic"
import Router from "next/router"

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
