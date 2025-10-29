import {toPlainText} from '@util'
import {defineField, defineType} from 'sanity'

const TITLE = 'Text Block'

export const textBlock = defineType({
  title: TITLE,
  name: 'textBlock',
  type: 'object',
  icon: () => '✍️',
  fields: [
    defineField({
      name: 'richText',
      type: 'richText',
    }),
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
