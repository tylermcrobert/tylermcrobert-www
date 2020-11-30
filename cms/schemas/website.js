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

export const theme = {
  name: 'theme',
  type: 'reference',
  to: [{ type: 'webFrameTheme' }],
  validation: Rule => Rule.required(),
}

export const websiteFields = [
  {
    name: 'media',
    type: 'array',
    of: [...websiteMedia],
    validation: Rule => Rule.required(),
  },
  theme,
  {
    name: 'backgroundImg',
    type: 'image',
    options: { hotspot: 'true' },
  },
  {
    name: 'showFrame',
    title: 'Show Browser Frame',
    type: 'boolean',
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
