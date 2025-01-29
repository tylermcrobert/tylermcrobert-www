import {defineType} from 'sanity'

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
      of: [{type: 'media'}],
      validation: (Rule) => Rule.required(),
    },

    {
      name: 'staticFallback',
      type: 'image',
      validation: (Rule) => Rule.required(),
    },

    {
      name: 'theme',
      type: 'reference',
      to: [{type: 'webFrameTheme'}],
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
