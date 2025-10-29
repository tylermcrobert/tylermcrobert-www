import {mediaRequired, prepareMedia, selectMedia} from '@util'
import {defineField, defineType} from 'sanity'

const TITLE = 'Website'

export const website = defineType({
  title: TITLE,
  name: 'website',
  type: 'object',
  icon: () => '🌐',
  fields: [
    defineField({
      name: 'media',
      type: 'media',
      validation: mediaRequired,
    }),

    defineField({
      name: 'showFrame',
      type: 'boolean',
      initialValue: true,
    }),

    defineField({
      name: 'theme',
      type: 'reference',
      to: [{type: 'webFrameTheme'}],
    }),

    defineField({
      name: 'backgroundImg',
      type: 'image',
      options: {hotspot: true},
    }),

    defineField({
      name: 'backgroundColor',
      type: 'color',
    }),
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
