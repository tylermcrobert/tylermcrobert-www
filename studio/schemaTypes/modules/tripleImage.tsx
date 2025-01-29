import {defineType} from 'sanity'

const TITLE = 'Triple Image'

export default defineType({
  title: TITLE,
  name: 'tripleImage',
  type: 'object',
  icon: () => '🚦',
  fields: [
    {
      name: 'mainMedia',
      type: 'media',
      validation: (Rule) => Rule.required(),
    },

    {
      name: 'imageRight',
      type: 'boolean',
      validation: (Rule) => Rule.required(),
    },

    {
      name: 'secondaryMedia1',
      type: 'media',
      validation: (Rule) => Rule.required(),
    },

    {
      name: 'secondaryMedia2',
      type: 'media',
      validation: (Rule) => Rule.required(),
    },
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
