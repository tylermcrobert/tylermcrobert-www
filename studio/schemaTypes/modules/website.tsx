import {defineType} from 'sanity'
import {mediaRequired, prepareMedia, selectMedia} from '@util'

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
      initialValue: true,
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
      ...selectMedia('media'),
    },
    prepare(p) {
      return {
        title: TITLE,
        ...prepareMedia(p),
      }
    },
  },
})
