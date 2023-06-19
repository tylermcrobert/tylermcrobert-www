import {defineField} from 'sanity'

export default {
  name: 'song',
  title: 'Song',
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
      title: 'Audio File',
      name: 'file',
      type: 'file',
      validation: (Rule) => Rule.required(),
    }),
  ],
}
