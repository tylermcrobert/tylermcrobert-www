import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'emptySpace',
  type: 'object',
  title: 'Column Spacer',
  fields: [
    defineField({
      name: 'meaninglessField',
      type: 'string',
      hidden: true,
    }),
  ],

  initialValue: {
    meaninglessField: 'foo',
  },

  preview: {
    prepare: (prev: any) => ({title: 'Empty Space'}),
  },
})
