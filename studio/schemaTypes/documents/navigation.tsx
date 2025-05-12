import {defineType} from 'sanity'

export const icon = () => '🧭'

export default defineType({
  name: 'navigation',
  type: 'object',
  icon,
  fields: [
    {
      name: 'title',
      type: 'string',
      initialValue: 'Navigation',
      hidden: true,
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
