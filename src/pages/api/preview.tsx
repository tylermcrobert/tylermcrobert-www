import { NextApiRequest, NextApiResponse } from "next"
import { Client, linkResolver } from "util/prismic"

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const data = await Client(req).getByID(req.query.documentId as string, {})
  const path = linkResolver(data)

  res.setPreviewData(data)
  res.writeHead(307, { Location: path })

  res.end()
}
