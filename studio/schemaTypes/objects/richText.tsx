import {DocumentIcon, LinkIcon} from '@sanity/icons'
import {RichTextMinimalContainer} from '../../components/richText'
import {defineType, defineArrayMember} from 'sanity'

const ANNOTATIONS = [
  {type: 'internalLink', name: 'internalLink'},
  {type: 'externalLink', name: 'link'},
]

const DECORATORS = [
  {title: 'Strong', value: 'strong'},
  {title: 'Emphasis', value: 'em'},
]

export default defineType({
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

export const richTextInternalLink = {
  icon: DocumentIcon,
  name: 'internalLink',
  type: 'object',
  title: 'Internal link',
  fields: [
    {
      name: 'reference',
      type: 'reference',
      to: [{type: 'homepage'}, {type: 'page'}],
    },
  ],
}

export const richTextExternalLink = {
  icon: LinkIcon,
  name: 'externalLink',
  type: 'object',
  title: 'External link',
  fields: [
    {
      title: 'URL',
      name: 'href',
      type: 'url',
      validation: (Rule: any) =>
        Rule.uri({
          allowRelative: false,
          scheme: ['http', 'https', 'mailto', 'tel'],
        }),
    },
    {
      title: 'Open in new tab',
      name: 'blank',
      type: 'boolean',
      initialValue: true,
    },
  ],
}
