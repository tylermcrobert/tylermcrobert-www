import {defineField} from 'sanity'

export default defineField({
  name: 'tripleImage',
  type: 'object',
  title: 'Three-up Image',
  fields: [
    defineField({
      name: 'mainImage',
      type: 'image',
      options: {hotspot: true},
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'secondaryImage1',
      type: 'image',
      options: {hotspot: true},
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'secondaryImage2',
      type: 'image',
      options: {hotspot: true},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'imageRight',
      type: 'boolean',
      validation: (Rule) => Rule.required(),
    }),
  ],

  preview: {
    select: {media: 'mainImage'},
    prepare: (prev) => ({...prev, title: 'Triple Image'}),
  },
})
