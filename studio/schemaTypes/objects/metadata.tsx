import {defineField, defineType} from 'sanity'

export const metadata = defineType({
  name: 'metadata',
  type: 'object',
  description: 'Metadata for SEO and social sharing.',
  fields: [
    defineField({
      name: 'description',
      title: 'Description',
      description:
        'A short description of the document used by search engines and social media. This is what populates beneath the title in search results.',
      type: 'text',
      rows: 2,
      validation: (Rule) =>
        Rule.max(150).warning('Longer descriptions may be truncated by search engines'),
    }),

    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      description:
        "The image that accompanies a link to your website when it's shared on social media platforms",
      options: {
        hotspot: true,
      },
    }),
  ],
})
