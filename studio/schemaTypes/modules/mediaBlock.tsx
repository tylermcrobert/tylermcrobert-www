import {defineType} from 'sanity'

const TITLE = 'Media Block'

export default defineType({
  title: TITLE,
  name: 'mediaBlock',
  type: 'object',
  icon: () => '🏞️',
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
        title: TITLE,
        subtitle: videoName || imageName,
        media: media,
      }
    },
  },
})
