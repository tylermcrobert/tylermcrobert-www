import {defineField} from 'sanity'

export default {
  name: 'dynamicImage',
  type: 'object',
  title: 'Dynamic Image',
  fields: [
    defineField({
      name: 'image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'aspect',
      type: 'aspect',
    }),

    defineField({
      name: 'span',
      type: 'string',
      options: {
        layout: 'radio',
        list: ['full', 'half'],
      },
    }),
  ],

  preview: {
    select: {media: 'image', layout: 'span'},
    prepare: (prev: any) => {
      if (!prev.layout) return prev
      const title = prev.layout[0].toUpperCase() + prev.layout.slice(1) + ' Image'
      return {...prev, title: title}
    },
  },
}
