import {toPlainText} from '@util'
import {defineType} from 'sanity'

const TITLE = 'Text Block'

export default defineType({
  title: TITLE,
  name: 'textBlock',
  type: 'object',
  icon: () => '✍️',
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
        subtitle: toPlainText(value.richText),
      }
    },
  },
})
