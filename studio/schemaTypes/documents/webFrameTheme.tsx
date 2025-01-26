import {defineField} from 'sanity'

export const icon = () => '🧭'

export default defineField({
  name: 'webFrameTheme',
  type: 'document',
  icon,
  fields: [
    {
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
  ],
})
