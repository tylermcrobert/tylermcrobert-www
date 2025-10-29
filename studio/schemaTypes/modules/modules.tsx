import {defineArrayMember, defineType} from 'sanity'

export const modules = defineType({
  name: 'modules',
  type: 'array',
  of: [
    defineArrayMember({type: 'textBlock'}),
    defineArrayMember({type: 'mediaBlock'}),
    defineArrayMember({type: 'website'}),
    defineArrayMember({type: 'diptych'}),
    defineArrayMember({type: 'mobileWebsite'}),
    defineArrayMember({type: 'tripleImage'}),
    defineArrayMember({type: 'playlistBlock'}),
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
