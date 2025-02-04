import {defineType} from 'sanity'

export const icon = () => '🙋🏼‍♀️'

export default defineType({
  name: 'info',
  type: 'document',
  icon,
  fields: [
    {
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },

    {
      name: 'bio',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },

    {
      name: 'clients',
      type: 'array',
      of: [{type: 'string'}],
      validation: (Rule) => Rule.required(),
    },

    {
      name: 'playlists',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'playlist'}],
        },
      ],
      validation: (Rule) => Rule.required(),
    },

    {
      name: 'previewImage',
      type: 'image',
      deprecated: {reason: "Don't need this"},
    },

    {
      name: 'slug',
      type: 'slug',
      deprecated: {reason: "Don't need this"},
      validation: (Rule) => Rule.required(),
    },

    {
      name: 'metadata',
      type: 'metadata',
    },
  ],
})
