export const websiteMedia = [
  {
    name: 'image',
    type: 'image',
    options: {
      hotspot: true,
    },
  },
  {
    name: 'video',
    type: 'object',
    fields: [
      {
        name: 'videoFile',
        type: 'file',
      },
    ],
  },
]

export const websiteFields = [
  {
    name: 'media',
    type: 'array',
    of: [...websiteMedia],
    validation: Rule => Rule.required(),
  },
  {
    name: 'theme',
    type: 'reference',
    to: [{ type: 'webFrameTheme' }],
    validation: Rule => Rule.required(),
  },
]

export const website = {
  name: 'website',
  type: 'object',
  fields: [...websiteFields],
  preview: {
    select: {
      media: 'media.0',
    },
    prepare: prev => ({ ...prev, title: 'Website' }),
  },
}
