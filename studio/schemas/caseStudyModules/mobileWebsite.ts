import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'mobileWebsite',
  type: 'object',
  title: 'Mobile Image',
  fields: [
    defineType({
      name: 'frames',
      type: 'imageOrVideo',
    }),

    defineField({
      name: 'theme',
      type: 'reference',
      to: [{type: 'webFrameTheme'}],
    }),
  ],

  preview: {
    select: {media: 'frames'},
    prepare: (prev: any) => ({title: 'Mobile Website', media: prev.media[0]}),
  },
})
