const ASPECT = [
  [4, 3],
  [3, 2],
  [16, 10],
  [16, 9],
]
  .reduce(
    (acc, [one, two]) => [
      ...acc,
      { num: one / two, aspect: `Portrait - ${one}:${two}` },
      { num: two / one, aspect: `Landscape – ${two}:${one}` },
    ],
    []
  )
  .map(crop => ({ ...crop, num: Math.round(crop.num * 100) / 100 }))
  .sort((a, b) => a.num - b.num)

export default {
  type: 'document',
  name: 'caseStudy',
  fields: [
    {
      type: 'slug',
      name: 'slug',
    },
    {
      name: 'title',
      type: 'string',
    },
    {
      name: 'date',
      type: 'datetime',
      validation: Rule => Rule.required(),
    },
    {
      name: 'intro',
      type: 'text',
      rows: 2,
    },

    {
      name: 'description',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'deliverables',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'modules',
      type: 'array',
      of: [
        /**
         * Single Image
         */
        {
          name: 'singleImage',
          type: 'object',
          fields: [
            {
              name: 'image',
              type: 'image',
              validation: Rule => Rule.required(),
            },
          ],
          preview: {
            select: {
              media: 'image',
            },
            prepare: prev => ({ ...prev, title: 'Single Image' }),
          },
        },
        /**
         * Double Image
         */
        {
          name: 'doubleImage',
          type: 'object',
          fields: [
            {
              name: 'leftImage',
              type: 'image',
              validation: Rule => Rule.required(),
            },
            {
              name: 'rightImage',
              type: 'image',
              validation: Rule => Rule.required(),
            },
            {
              name: 'aspect',
              type: 'number',
              options: {
                list: ASPECT.map(({ num, aspect }) => ({
                  value: num,
                  title: aspect,
                })),
              },
            },
          ],
          preview: {
            select: {
              media: 'leftImage',
            },
            prepare: prev => ({ ...prev, title: 'Double Image' }),
          },
        },
        /**
         * Triple Image
         */
        {
          name: 'tripleImage',
          type: 'object',
          fields: [
            {
              name: 'mainImage',
              type: 'image',
              validation: Rule => Rule.required(),
            },
            {
              name: 'secondaryImage1',
              type: 'image',
              validation: Rule => Rule.required(),
            },
            {
              name: 'secondaryImage2',
              type: 'image',
              validation: Rule => Rule.required(),
            },
            {
              name: 'imageRight',
              title: 'Put main image on left',
              type: 'boolean',
            },
          ],
          preview: {
            select: {
              media: 'mainImage',
            },
            prepare: prev => ({ ...prev, title: 'Triple Image' }),
          },
        },
        /**
         * Website
         */

        {
          name: 'website',
          type: 'object',
          fields: [
            {
              name: 'media',
              type: 'array',
              of: [
                {
                  name: 'image',
                  type: 'image',
                },
              ],
              validation: Rule => Rule.required(),
            },
            {
              name: 'theme',
              type: 'reference',
              to: [{ type: 'webFrameTheme' }],
              validation: Rule => Rule.required(),
            },
          ],
          preview: {
            select: {
              media: 'media.0',
            },
            prepare: prev => ({ ...prev, title: 'Website' }),
          },
        },
      ],
    },
  ],
  initialValue: {
    date: new Date(),
  },
}
