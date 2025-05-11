import {defineType} from 'sanity'
import {toPlainText} from '../../util/toPlainText'
import {mediaRequired, prepareMedia, selectMedia} from '@util'

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
      of: [{type: 'diptych.media'}, {type: 'diptych.text'}, {type: 'diptych.spacer'}],
    },
  ],
  preview: {
    select: {items: 'items'},
    prepare({items = []}) {
      const text = toPlainText(items.find((item: any) => item?.richText)?.richText)
      const itemCount = `${items?.length} item${items?.length === 1 ? '' : 's'}`

      return {
        title: TITLE,
        media: items.find((item: any) => item?.media)?.media?.image,
        subtitle: text || itemCount,
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
      validation: mediaRequired,
    },

    {
      name: 'aspect',
      type: 'aspect',
    },
  ],
  preview: {
    select: {...selectMedia('media')},
    prepare(p) {
      return {title: 'Media', ...prepareMedia(p)}
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

export const diptychSpacer = defineType({
  title: 'Spacer',
  name: 'diptych.spacer',
  type: 'object',
  icon: () => '📏',
  fields: [
    {
      name: 'arbitraryText',
      type: 'string',
      initialValue: 'Hello world',
      hidden: true,
    },
  ],
  preview: {
    prepare() {
      return {title: 'Spacer'}
    },
  },
})
