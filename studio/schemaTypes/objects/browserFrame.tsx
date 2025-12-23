import {defineField, defineType} from 'sanity'

export const browserFrame = defineType({
  name: 'browserFrame',
  type: 'object',
  title: 'Browser Frame',
  fields: [
    defineField({
      name: 'style',
      type: 'string',
      validation: (Rule) => Rule.required(),
      options: {
        list: [
          {title: 'Simplified', value: 'simple'},
          {title: 'Accurate', value: 'accurate'},
        ],
      },
    }),

    defineField({
      name: 'frameBackground',
      type: 'color',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'frameForeground',
      type: 'color',
      hidden: ({parent}) => parent?.style !== 'accurate',
      validation: (Rule) =>
        Rule.custom((value, context) => {
          const style = (context.parent as any)?.style
          if (style === 'accurate' && !value) {
            return 'Foreground is required when style is "Accurate"'
          }
          return true
        }),
    }),

    defineField({
      name: 'dots',
      type: 'color',
    }),

    defineField({
      name: 'sectionBackground',
      type: 'color',
      validation: (Rule) => Rule.required(),
    }),
  ],
})
