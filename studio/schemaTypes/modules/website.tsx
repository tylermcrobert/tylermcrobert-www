import {defineType} from 'sanity'

const TITLE = 'Website'

export default defineType({
  title: TITLE,
  name: 'website',
  type: 'object',
  icon: () => '🌐',
  fields: [
    {
      name: 'media',
      type: 'media',
      validation: (Rule) => Rule.required(),
    },

    {
      name: 'showFrame',
      type: 'boolean',
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
