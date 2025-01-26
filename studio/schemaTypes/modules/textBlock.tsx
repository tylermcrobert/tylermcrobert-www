import {defineType} from 'sanity'
import {toPlainText} from '../../util/toPlainText'

const TITLE = 'Text Block'

export default defineType({
  title: TITLE,
  name: 'textBlock',
  type: 'object',
  icon: () => '✍️',
  fields: [
    {
      name: 'content',
      type: 'richText',
      deprecated: {
        reason: 'Use RichText instaed',
      },
    },
    {
      title: 'Content',
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
