import {defineField, defineType} from 'sanity'

export const icon = () => '🏡'

export const homepage = defineType({
  name: 'homepage',
  type: 'document',
  icon,
  fields: [
    defineField({
      title: 'Homepage Title',
      name: 'homepageMetaTitle',
      type: 'string',
      description:
        "A browser tab title specifically for the homepage. Define the site's global title in Settings",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'context',
      type: 'reference',
      to: [{type: 'context'}],
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    prepare: () => ({title: 'Homepage'}),
  },
})
