import { NextApiRequest, NextApiResponse } from "next"
import { Client, linkResolver } from "util/prismic"
import Prismic from "prismic-javascript"
import getCookieValue from "util/getCookieValue"
import Cookie from "js-cookie"

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const data = await Client(req).getByID(req.query.documentId as string, {})
  const path = linkResolver(data)

  const previewCookie = getCookieValue(
    req.headers.cookie,
    Prismic.previewCookie
  )

  res.setPreviewData({ previewCookie })
  res.writeHead(307, { Location: path })

  res.end()
}
