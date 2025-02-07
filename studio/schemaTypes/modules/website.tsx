import {defineType} from 'sanity'
import {mediaRequired} from '../objects/media'

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
      validation: mediaRequired,
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

    {
      name: 'backgroundImg',
      type: 'image',
      options: {hotspot: true},
    },

    {
      name: 'backgroundColor',
      type: 'color',
    },
  ],
  preview: {
    select: {
      image: 'media.image',
      imageName: 'media.image.asset.originalFilename',
    },
    prepare({image, imageName}) {
      return {
        title: TITLE,
        media: image,
        subtitle: imageName,
      }
    },
  },
})
