import { NextApiRequest, NextApiResponse } from 'next'
import cheerio from 'cheerio'
import fetch from 'node-fetch'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const slug = req.query.slug
  const response = await fetch(`https://www.maud.com.au/projects/${slug}/`)

  const docText = await response.text()

  const $ = cheerio.load(docText)

  const title = $('title')
    .text()
    .split(' — ')[0]

  const intro = {
    heading: $('#project-description .text-item.large').text(),
    textHtml: $('#project-description .text-item.default').html(),
    text: $('#project-description .text-item.default').text(),
  }
  const modules = $('#project-layout-modules > * ').toArray()

  const classNames = modules.map(module => $(module).attr('class') || '')

  const moduleData: {
    type: string
    width: 'full' | 'half' | null
    alignRight: boolean
  }[] = classNames.map((cn, i) => {
    const html = $(modules[i]).html() || ''
    const $matchingNode = cheerio.load(html)

    const width = cn.includes('col-50') ? 'half' : 'full'
    const alignRight = cn.includes('push-50')

    if (cn.includes('content-item-video')) {
      return {
        type: 'video',
        videoSrc: $matchingNode('source').attr('src'),
        width,
        alignRight,
      }
    }

    const dataSrc = $matchingNode('img').attr('data-src')
    const src = $matchingNode('img').attr('src')
    const imgSrc = dataSrc || src

    if (imgSrc) {
      return {
        type: 'image',
        src: imgSrc,
        width,
        alignRight,
      }
    }

    return {
      type: 'unknow',
      data: '______________________________________________________',
      width: width,
      alignRight,
    }
  })

  res.json({ title, intro, modules: moduleData })
}
