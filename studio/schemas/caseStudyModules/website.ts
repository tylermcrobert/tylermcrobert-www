import {defineField} from 'sanity'

export default {
  name: 'website',
  type: 'object',
  title: 'Website Module',
  fields: [
    defineField({
      name: 'media',
      type: 'imageOrVideo',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'showFrame',
      title: 'Show Browser Frame',
      type: 'boolean',
    }),

    defineField({
      name: 'theme',
      type: 'reference',
      to: [{type: 'webFrameTheme'}],
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'backgroundImg',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],

  preview: {
    select: {media: 'media'},
    prepare: (prev: any) => ({title: 'Website', media: prev.media[0]}),
  },
}
