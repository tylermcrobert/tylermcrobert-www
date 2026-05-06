import {defineField, defineType} from 'sanity'

export const videoDocument = defineType({
  name: 'videoDocument',
  type: 'document',
  icon: () => '🎥',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'video',
      type: 'mux.video',
      validation: (Rule) => Rule.required(),
    }),
  ],
})
