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
  ],
})
