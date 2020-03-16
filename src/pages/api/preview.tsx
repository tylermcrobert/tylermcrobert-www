import { NextApiRequest, NextApiResponse } from "next"
import { Client, linkResolver } from "util/prismic"

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { query } = req
  const data = await Client(req).getByID(query.documentId as string, {})
  const path = linkResolver(data)

  res.setPreviewData(req.query)
  res.writeHead(307, { Location: path })

  res.end()
}
