import {defineField} from 'sanity'

export default {
  name: 'webFrameTheme',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Song Title',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'background',
      type: 'color',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'frame',
      type: 'color',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'dots',
      type: 'color',
    }),
  ],
}
