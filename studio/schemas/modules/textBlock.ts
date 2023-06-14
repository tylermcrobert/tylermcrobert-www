import {defineType} from 'sanity'

const field = {
  title: 'Text Block',
  name: 'textBlock',
  type: 'object',
  fields: [
    defineType({
      name: 'content',
      type: 'array',
      of: [{type: 'block'}],
    }),
  ],
  preview: {select: {title: 'content'}},
}

export default field
