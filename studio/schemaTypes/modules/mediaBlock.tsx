import {mediaRequired, prepareMedia, selectMedia} from '@util'
import {defineField, defineType} from 'sanity'

const TITLE = 'Media Block'

export const mediaBlock = defineType({
  title: TITLE,
  name: 'mediaBlock',
  type: 'object',
  icon: () => '🏞️',
  fields: [
    defineField({
      name: 'media',
      type: 'media',
      validation: mediaRequired,
    }),

    defineField({
      name: 'aspect',
      type: 'aspect',
    }),
  ],
  preview: {
    select: {...selectMedia('media')},
    prepare(p) {
      return {
        title: TITLE,
        ...prepareMedia(p),
      }
    },
  },
})
