import {defineArrayMember, defineField} from 'sanity'

export default {
  name: 'website',
  type: 'object',
  title: 'Website Module',
  fields: [
    defineField({
      name: 'media',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'image',
          type: 'image',
          options: {hotspot: true},
        }),

        defineArrayMember({
          name: 'video',
          type: 'object',
          fields: [{name: 'videoFile', type: 'file'}],
        }),
      ],
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
    prepare: (prev: any) => ({title: 'website', media: prev.media[0]}),
  },
}
