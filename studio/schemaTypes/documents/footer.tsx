import {defineType} from 'sanity'

export const icon = () => '🥾'

export default defineType({
  name: 'footer',
  type: 'object',
  icon,
  fields: [
    {
      name: 'title',
      type: 'string',
      hidden: true,
      initialValue: 'Footer',
    },

    {
      name: 'links',
      type: 'array',
      validation: (Rule) => Rule.required(),
      of: [
        {
          name: 'link',
          type: 'link',
          validation: (Rule) => Rule.required(),
        },
      ],
    },
  ],
})
