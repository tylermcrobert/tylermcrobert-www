import { NextApiRequest, NextApiResponse } from 'next'
import { linkResolver } from '../../util'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { type, slug } = req.query

  // Enable Preview Mode by setting the cookies
  res.setPreviewData({})

  // Redirect to the path from the fetched post
  // We don't redirect to req.query.slug as that might lead to open redirect vulnerabilities
  res.writeHead(307, {
    Location: linkResolver(type.toString(), slug.toString()),
  })
  res.end()
  return null
}
