import {defineField} from 'sanity'

export default {
  name: 'context',
  title: 'Context',
  type: 'document',
  icon: () => '🗺️',
  fields: [
    defineField({
      name: 'slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'caseStudies',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'caseStudy'}]}],
      validation: (Rule) => Rule.required(),
    }),
  ],
}
