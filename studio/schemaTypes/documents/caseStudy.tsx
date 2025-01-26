import {defineField} from 'sanity'

export const icon = () => '🎨'

export default defineField({
  name: 'caseStudy',
  type: 'document',
  icon,
  fields: [
    {
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },

    {
      name: 'slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'title',
      },
    },

    {
      name: 'date',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    },

    {
      name: 'intro',
      type: 'text',
      rows: 2,
      validation: (Rule) => Rule.required(),
    },

    {
      name: 'deliverables',
      type: 'array',
      of: [
        {
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
      ],
      validation: (Rule) => Rule.required(),
    },

    {
      name: 'previewImage',
      type: 'image',
      validation: (Rule) => Rule.required(),
    },

    {
      name: 'description',
      type: 'richTextSimple',
      validation: (Rule) => Rule.required(),
    },

    {
      name: 'modules',
      type: 'modules',
      validation: (Rule) => Rule.required(),
    },
  ],

  preview: {
    select: {
      title: 'title',
      subtitle: 'intro',
      media: 'previewImage',
    },
  },
})
