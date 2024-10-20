import {defineField} from 'sanity'

export default {
  name: 'info',
  title: 'Info',
  type: 'document',
  icon: () => '🙋🏼‍♀️',
  fields: [
    defineField({
      name: 'slug',
      type: 'slug',
      hidden: true,
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'bio',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'previewImage',
      type: 'image',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'playlists',
      type: 'array',
      of: [{type: 'reference', to: {type: 'playlist'}}],
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'clients',
      type: 'array',
      of: [{type: 'string'}],
      validation: (Rule) => Rule.required(),
    }),
  ],
}
