import {defineField, defineType} from 'sanity'

export const page = defineType({
  name: 'page',
  type: 'document',
  icon: () => '📝',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'slug',
      type: 'slug',
      description: 'This is used in the URL path of the page.',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'title',
      },
    }),

    defineField({
      name: 'modules',
      type: 'modules',
      description: "Build the page's content using Modules",
    }),

    defineField({
      name: 'metadata',
      type: 'metadata',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'slug.current',
    },
    prepare({title, subtitle}) {
      return {
        title,
        subtitle: `/${subtitle}`,
      }
    },
  },
})
