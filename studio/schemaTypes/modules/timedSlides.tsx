import {defineField, defineType} from 'sanity'

const TITLE = 'Timed Slides'

export const timedSlides = defineType({
  title: TITLE,
  name: 'timedSlides',
  type: 'object',
  icon: () => '⏱️',
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
      name: 'background',
      type: 'color',
    }),
  ],
  preview: {
    select: {media: 'images.0'},
    prepare({media}) {
      return {
        title: TITLE,
        media,
      }
    },
  },
})
