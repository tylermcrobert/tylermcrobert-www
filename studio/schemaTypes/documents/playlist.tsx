import {defineType} from 'sanity'

export default defineType({
  name: 'playlist',
  type: 'document',
  icon: () => '💿',
  fields: [
    {
      name: 'title',
      type: 'string',
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
      title: 'Spotify Playlist Link',
      name: 'link',
      type: 'url',
      validation: (Rule) => Rule.required(),
    },
  ],
})
