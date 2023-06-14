import {defineField} from 'sanity'

export default {
  type: 'document',
  name: 'caseStudy',
  title: 'Case Study',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      type: 'slug',
      name: 'slug',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'date',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'intro',
      type: 'text',
      rows: 2,
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'description',
      type: 'array',
      of: [{type: 'block'}],
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'deliverables',
      type: 'array',
      of: [{type: 'string'}],
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'modules',
      type: 'array',
      of: [{type: 'website'}, {type: 'dynamicImage'}],
    }),
  ],
}
