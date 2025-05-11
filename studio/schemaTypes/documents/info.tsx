import {prepareLink, selectLink} from '@util'
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
      name: 'links',
      type: 'array',
      validation: (Rule) => Rule.required(),
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'label',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },

            {
              name: 'link',
              type: 'link',
              validation: (Rule) => Rule.required(),
            },
          ],
          preview: {
            select: {...selectLink('link'), label: 'label'},
            prepare: (p) => ({title: p.label, subtitle: prepareLink(p).title}),
          },
        },
      ],
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
      name: 'metadata',
      type: 'metadata',
    },
  ],
})
