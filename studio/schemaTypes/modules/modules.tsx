import {defineType} from 'sanity'

export default defineType({
  name: 'modules',
  type: 'array',
  of: [
    {type: 'textBlock'},
    {type: 'mediaBlock'},
    {type: 'website'},
    {type: 'diptych'},
    {type: 'mobileWebsite'},
    {type: 'tripleImage'},
    {type: 'playlistBlock'},
  ],
  options: {
    insertMenu: {
      views: [
        {
          name: 'grid',
          previewImageUrl: (schemaTypeName) => `/static/previews/preview-${schemaTypeName}.png`,
        },
        {name: 'list'},
      ],
    },
  },
})
