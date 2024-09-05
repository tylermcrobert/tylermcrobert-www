import {defineType} from 'sanity'
import {previewBlockContent} from '../objects/richText'

const TITLE = 'Text Block'

export default defineType({
  title: TITLE,
  name: 'textBlock',
  type: 'object',
  fields: [
    {
      name: 'richText',
      type: 'richText',
    },
  ],
  preview: {
    select: {
      richText: 'richText',
    },
    prepare(value) {
      return {
        title: TITLE,
        subtitle: previewBlockContent(value.richText),
      }
    },
  },
})
