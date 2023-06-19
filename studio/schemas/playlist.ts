import {defineField} from 'sanity'

export default {
  name: 'playlist',
  title: 'Playlist',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'slug',
      title: 'slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'link',
      title: 'Spotify Link',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
}
