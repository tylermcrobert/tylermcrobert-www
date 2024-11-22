import {defineType} from 'sanity'

export const richTextMinimal = defineType({
  name: 'richTextMinimal',
  type: 'array',
  of: [
    {
      title: 'Block',
      type: 'block',
      lists: [],
      styles: [{title: 'Normal', value: 'normal'}],
      marks: {
        annotations: [],
        decorators: [
          {title: 'Strong', value: 'strong'},
          {title: 'Emphasis', value: 'em'},
        ],
      },
    },
  ],
})

export const richText = defineType({
  title: 'Rich Text',
  name: 'richText',
  type: 'array',
  of: [
    {
      title: 'Block',
      type: 'block',
      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'Heading 1', value: 'h1'},
        {title: 'Heading 2', value: 'h2'},
        {title: 'Heading 3', value: 'h3'},
        {title: 'Quote', value: 'blockquote'},
      ],
      lists: [
        {title: 'Bullet', value: 'bullet'},
        {title: 'Numbered', value: 'number'},
      ],
      marks: {
        decorators: [
          {title: 'Strong', value: 'strong'},
          {title: 'Emphasis', value: 'em'},
        ],
        annotations: [
          {
            name: 'link',
            type: 'object',
            fields: [{name: 'link', type: 'link'}],
          },
        ],
      },
    },
  ],
})

export function previewBlockContent(blocks: any) {
  const firstBlock = (blocks || []).find((block: any) => block._type === 'block')

  return firstBlock
    ? firstBlock.children
        .filter((child: any) => child._type === 'span')
        .map((span: any) => span.text)
        .join('')
    : 'No title'
}
