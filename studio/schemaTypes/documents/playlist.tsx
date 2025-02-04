import {defineType} from 'sanity'

import SpotifyFetch from '../../components/SpotifyFetch'

export default defineType({
  name: 'playlist',
  type: 'document',
  icon: () => '💿',
  components: {
    input: SpotifyFetch,
  },
  fields: [
    {
      title: 'Spotify Playlist Link',
      name: 'link',
      type: 'url',
      validation: (Rule) => Rule.required(),
    },

    {
      name: 'slug',
      type: 'slug',
      description: 'This is used ine the URL path of the page.',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'title',
      },
    },

    {
      name: 'title',
      type: 'string',
      readOnly: true,
      validation: (Rule) => Rule.required(),
    },

    {
      name: 'duration',
      type: 'number',
      readOnly: true,
      validation: (Rule) => Rule.required(),
    },

    {
      name: 'date',
      type: 'datetime',
      readOnly: true,
      validation: (Rule) => Rule.required(),
    },

    {
      title: 'Spotify Image Link',
      name: 'image',
      type: 'string',
      readOnly: true,
      validation: (Rule) => Rule.required(),
    },

    {
      name: 'tracks',
      type: 'array',
      title: 'Fetched Data',
      readOnly: true,
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },

            {
              name: 'artists',
              type: 'array',
              of: [
                {
                  name: 'type',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                },
              ],
              validation: (Rule) => Rule.required(),
            },

            {
              name: 'duration',
              type: 'number',
              validation: (Rule) => Rule.required(),
            },

            {
              name: 'added',
              type: 'datetime',
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ], // Change type based on API response structure
    },
  ],
})
