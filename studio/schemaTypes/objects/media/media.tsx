import {defineField, defineType} from 'sanity'

import {MediaInput} from './components/MediaInput'
import {prepareMedia, selectMedia} from './mediaPreview'

export const media = defineType({
  name: 'media',
  type: 'object',
  components: {input: MediaInput},
  fields: [
    defineField({
      name: 'image',
      type: 'image',
      readOnly: false,
      options: {
        hotspot: true,
      },
      hidden: ({parent}) => {
        return !!parent?.videoPlayer?.muxAsset
      },
    }),

    defineField({
      name: 'videoPlayer',
      type: 'videoPlayer',
      title: 'Video',
      hidden: ({parent}) => {
        return !!parent?.image
      },
    }),
  ],
  preview: {
    select: {
      ...selectMedia(null),
    },
    prepare: (p) => {
      return {
        media: prepareMedia(p).media,
        title: prepareMedia(p).subtitle,
      }
    },
  },
})
