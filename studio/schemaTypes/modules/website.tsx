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

    {
      name: 'backgroundImg',
      type: 'image',
      options: {hotspot: true},
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
