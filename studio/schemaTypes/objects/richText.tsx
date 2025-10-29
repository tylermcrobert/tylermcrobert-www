import {RichTextMinimalContainer} from '@components'
import {DocumentIcon, LinkIcon} from '@sanity/icons'
import {INTERNAL_LINK_TYPES} from '@util'
import {defineArrayMember, defineField, defineType} from 'sanity'

const ANNOTATIONS = [
  {type: 'internalLink', name: 'internalLink'},
  {type: 'externalLink', name: 'link'},
]

const DECORATORS = [
  {title: 'Strong', value: 'strong'},
  {title: 'Emphasis', value: 'em'},
]

export const richText = defineType({
  name: 'richText',
  type: 'array',
  of: [
    defineArrayMember({
      title: 'Block',
      type: 'block',
      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'Heading 1', value: 'h1'},
        {title: 'Heading 2', value: 'h2'},
      ],
      lists: [
        {title: 'Bullet', value: 'bullet'},
        {title: 'Numbered', value: 'number'},
      ],
      marks: {
        decorators: DECORATORS,
        annotations: ANNOTATIONS,
      },
    }),
  ],
})

export const richTextMinimal = defineType({
  name: 'richTextMinimal',
  type: 'array',
  components: {
    input: RichTextMinimalContainer,
  },
  of: [
    defineArrayMember({
      title: 'Block',
      type: 'block',
      lists: [],
      styles: [],
      marks: {
        decorators: [],
        annotations: [],
      },
    }),
  ],
})

export const richTextSimple = defineType({
  name: 'richTextSimple',
  type: 'array',
  of: [
    defineArrayMember({
      title: 'Block',
      type: 'block',
      lists: [],
      styles: [{title: 'Normal', value: 'normal'}],
      marks: {
        decorators: DECORATORS,
        annotations: ANNOTATIONS,
      },
    }),
  ],
})

export const richTextInternalLink = defineType({
  icon: DocumentIcon,
  name: 'internalLink',
  type: 'object',
  title: 'Internal link',
  fields: [
    defineField({
      name: 'reference',
      type: 'reference',
      to: INTERNAL_LINK_TYPES,
    }),
  ],
})

export const richTextExternalLink = defineType({
  icon: LinkIcon,
  name: 'externalLink',
  type: 'object',
  title: 'External link',
  fields: [
    defineField({
      title: 'URL',
      name: 'href',
      type: 'url',
      validation: (Rule: any) =>
        Rule.uri({
          allowRelative: false,
          scheme: ['http', 'https', 'mailto', 'tel'],
        }),
    }),
    defineField({
      title: 'Open in new tab',
      name: 'blank',
      type: 'boolean',
      initialValue: true,
    }),
  ],
})
