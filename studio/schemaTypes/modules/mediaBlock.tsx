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
      video: 'media.video',
      image: 'media.image',
      imageName: 'media.image.asset.originalFilename',
      posterFrame: 'media.posterFrame',
    },
    prepare({image, imageName, posterFrame, video}) {
      if (video?.asset) {
        return {
          title: TITLE,
          subtitle: 'Video asset',
          media: posterFrame || (() => '🎥'),
        }
      }

      return {
        title: TITLE,
        subtitle: imageName,
        media: image,
      }
    },
  },
})
