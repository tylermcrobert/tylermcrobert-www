import {defineType} from 'sanity'
import {prepareMedia, selectMedia} from '../../util'

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
    select: {...selectMedia('media')},
    prepare(p) {
      return {
        title: TITLE,
        ...prepareMedia(p),
      }
    },
  },
})
