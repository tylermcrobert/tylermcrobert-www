import {defineType} from 'sanity'

export const icon = () => '🏡'

export default defineType({
  name: 'homepage',
  type: 'document',
  icon,
  fields: [
    {
      title: 'Homepage Title',
      name: 'title',
      type: 'string',
      description: "A title specifically for the homepage. Define the site's title in Settings",
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'context',
      type: 'reference',
      to: [{type: 'context'}],
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Homepage',
      }
    },
  },
})
