import {defineType} from 'sanity'
import {toPlainText} from '../../util/toPlainText'

const TITLE = 'Diptych'

export default defineType({
  title: TITLE,
  name: 'diptych',
  type: 'object',
  icon: () => '👯',
  fields: [
    {
      name: 'items',
      type: 'array',
      validation: (Rule) =>
        Rule.required().min(1).max(2).error('Diptychs must contain 1 to 2 items.'),
      of: [{type: 'diptych.media'}, {type: 'diptych.text'}],
    },
  ],
  preview: {
    select: {items: 'items'},
    prepare({items}) {
      return {
        title: TITLE,
        media: items.find((item: any) => item?.media)?.media?.image,
        subtitle: toPlainText(items.find((item: any) => item?.richText)?.richText),
      }
    },
  },
})

export const diptychMedia = defineType({
  title: 'Media',
  name: 'diptych.media',
  type: 'object',
  icon: () => '🏞️',
  fields: [
    {
      name: 'media',
      type: 'media',
    },
  ],
  preview: {
    select: {media: 'media'},
    prepare({media}) {
      return {media: media.image.asset, title: 'Media'}
    },
  },
})

export const diptychText = defineType({
  title: 'Text',
  name: 'diptych.text',
  type: 'object',
  icon: () => '✏️',
  fields: [
    {
      name: 'richText',
      type: 'richText',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {richText: 'richText'},
    prepare({richText}) {
      return {title: toPlainText(richText)}
    },
  },
})
