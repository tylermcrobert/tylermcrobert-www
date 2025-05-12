import {defineType} from 'sanity'

const TITLE = 'Playlist Block'

export default defineType({
  title: TITLE,
  name: 'playlistBlock',
  type: 'object',
  icon: () => '🎵',
  fields: [
    {
      name: 'playlist',
      type: 'reference',
      to: [{type: 'playlist'}],
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'playlist.title',
      image: 'playlist.image',
    },
    prepare({title, image}) {
      return {
        title: TITLE,
        subtitle: title,
        media: image && <img src={image} alt={title} />,
      }
    },
  },
})
