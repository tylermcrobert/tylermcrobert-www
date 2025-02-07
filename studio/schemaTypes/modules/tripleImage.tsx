import {defineType} from 'sanity'
import {mediaRequired} from '../objects/media'

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
      validation: mediaRequired,
    },

    {
      name: 'imageRight',
      type: 'boolean',
    },

    {
      name: 'secondaryMedia1',
      type: 'media',
      validation: mediaRequired,
    },

    {
      name: 'secondaryMedia2',
      type: 'media',
      validation: mediaRequired,
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
