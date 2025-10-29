import {defineField, defineType} from 'sanity'

import {mediaRequired} from '../objects/media'

const TITLE = 'Triple Image'

export const tripleImage = defineType({
  title: TITLE,
  name: 'tripleImage',
  type: 'object',
  icon: () => '🚦',
  fields: [
    defineField({
      name: 'mainMedia',
      type: 'media',
      validation: mediaRequired,
    }),

    defineField({
      name: 'imageRight',
      type: 'boolean',
    }),

    defineField({
      name: 'secondaryMedia1',
      type: 'media',
      validation: mediaRequired,
    }),

    defineField({
      name: 'secondaryMedia2',
      type: 'media',
      validation: mediaRequired,
    }),
  ],
  preview: {
    select: {
      image: 'mainMedia.image',
    },
    prepare({image}) {
      return {
        title: TITLE,
        media: image,
      }
    },
  },
})
