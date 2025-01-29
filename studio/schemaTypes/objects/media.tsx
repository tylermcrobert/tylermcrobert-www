import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'media',
  type: 'object',
  fields: [
    defineField({
      name: 'image',
      type: 'image',
      options: {
        hotspot: true,
      },
      hidden: ({parent}) => {
        return !!parent?.video
      },
    }),

    {
      title: 'Video file',
      name: 'video',
      type: 'mux.video',
      hidden: ({parent}) => {
        return !!parent?.image
      },
      options: {
        collapsable: false,
      },
    },

    {
      title: 'Old video file',
      name: 'videoFile',
      type: 'file',
      deprecated: {
        reason: 'Use video',
      },
    },

    {
      name: 'showVideoControls',
      type: 'boolean',
      initialValue: false,
      hidden: ({parent}) => {
        return !parent?.video
      },
    },

    {
      name: 'posterFrame',
      type: 'image',
      initialValue: false,
      hidden: ({parent}) => {
        return !(parent?.video && parent.showVideoControls)
      },
    },
  ],
  preview: {
    select: {
      image: 'image',
      imageName: 'image.asset.originalFilename',
      video: 'video',
    },
    prepare: ({image, imageName, video}) => {
      const isVideo = !!video

      return {
        title: imageName || (isVideo && 'Video Block') || 'Media Block',
        media: image || video,
      }
    },
  },
})
