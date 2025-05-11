import {prepareMedia, selectMedia, mediaRequired} from '@util'
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
      validation: mediaRequired,
    },

    {
      name: 'aspect',
      type: 'aspect',
    },
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
