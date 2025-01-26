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
      name: 'modules',
      type: 'modules',
      description: "Build the page's content using Modules",
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
