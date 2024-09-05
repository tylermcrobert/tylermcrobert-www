import {defineType} from 'sanity'

export const icon = () => '⚙️'

export default defineType({
  name: 'settings',
  type: 'document',
  icon,
  fields: [
    {
      type: 'string',
      name: 'siteTitle',
      validation: (Rule) => Rule.required(),
    },

    {
      name: 'metadata',
      type: 'metadata',
      validation: (Rule) => Rule.required(),
    },
  ],
})
