import {defineType} from 'sanity'
import {mediaRequired} from '../objects/media'

const TITLE = 'Mobile Website'

export default defineType({
  title: TITLE,
  name: 'mobileWebsite',
  type: 'object',
  icon: () => '📱',
  fields: [
    {
      name: 'frames',
      type: 'array',
      of: [{type: 'mobileWebsite.item'}],
      validation: (Rule) => Rule.required(),
    },

    {
      name: 'staticFallback',
      type: 'image',
      hidden: true,
      deprecated: {
        reason: "I don't know why this was here",
      },
    },

    {
      name: 'theme',
      type: 'reference',
      to: [{type: 'webFrameTheme'}],
    },
  ],
  preview: {
    select: {frames: 'frames'},
    prepare({frames}) {
      const itemCount = `${frames?.length} item${frames?.length === 1 ? '' : 's'}`

      return {
        title: TITLE,
        subtitle: itemCount,
      }
    },
  },
})

export const mobileWebsiteItem = defineType({
  name: 'mobileWebsite.item',
  type: 'object',
  fields: [
    {
      name: 'media',
      type: 'media',
    },
  ],
  preview: {
    select: {},
    prepare() {
      return {
        title: TITLE,
      }
    },
  },
})
