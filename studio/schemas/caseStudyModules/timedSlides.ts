import {defineField} from 'sanity'

export default defineField({
  name: 'timedSlides',
  type: 'object',
  title: 'Timed Slides',
  fields: [
    defineField({
      name: 'images',
      type: 'array',
      options: {layout: 'grid'},
      of: [{type: 'image', validation: (Rule) => Rule.required()}],
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'seconds',
      type: 'number',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'theme',
      type: 'reference',
      to: [{type: 'webFrameTheme'}],
      validation: (Rule) => Rule.required(),
    }),
  ],

  preview: {
    select: {media: 'images'},
    prepare: (prev: any) => ({title: 'Timed Slides', media: prev.media[0]}),
  },
})
