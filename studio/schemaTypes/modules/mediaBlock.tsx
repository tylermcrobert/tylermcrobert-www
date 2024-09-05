import {defineType} from 'sanity'

export default defineType({
  name: 'mediaBlock',
  type: 'object',
  fields: [
    {
      name: 'media',
      type: 'media',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      media: 'media.image',
      videoName: 'media.video.asset.originalFilename',
      imageName: 'media.image.asset.originalFilename',
    },
    prepare({media, videoName, imageName}) {
      return {
        title: 'Media Block',
        subtitle: videoName || imageName,
        media: media,
      }
    },
  },
})
