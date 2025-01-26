import {defineType} from 'sanity'

export default defineType({
  name: 'page',
  type: 'document',
  icon: () => '📝',
  fields: [
    {
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },

    {
      name: 'slug',
      type: 'slug',
      description: 'This is used ine the URL path of the page.',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'title',
      },
    },

    {
      name: 'modules',
      type: 'modules',
      description: "Build the page's content using Modules",
    },

    {
      name: 'metadata',
      type: 'metadata',
    },
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
