import {defineArrayMember, defineType} from 'sanity'

const field = defineType({
  name: 'imageOrVideo',
  type: 'array',
  title: 'Image / Video',
  of: [
    defineArrayMember({
      name: 'image',
      type: 'image',
      options: {hotspot: true},
    }),

    defineArrayMember({
      name: 'video',
      type: 'object',
      fields: [{name: 'videoFile', type: 'file'}],
    }),
  ],
})

export default field
