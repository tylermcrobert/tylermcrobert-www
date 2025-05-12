import {defineType} from 'sanity'

export const icon = () => '🏡'

export default defineType({
  name: 'homepage',
  type: 'document',
  icon,
  fields: [
    {
      name: 'title',
      type: 'string',
      initialValue: 'Homepage',
      hidden: true,
    },
    {
      title: 'Homepage Title',
      name: 'homepageMetaTitle',
      type: 'string',
      description:
        "A browser tab title specifically for the homepage. Define the site's global title in Settings",
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
