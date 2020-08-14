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
        {
          name: 'singleImage',
          type: 'object',
          fields: [
            {
              name: 'image',
              type: 'image',
            },
          ],
        },
        {
          name: 'doubleImage',
          type: 'object',
          fields: [
            {
              name: 'leftImage',
              type: 'image',
            },
            {
              name: 'rightImage',
              type: 'image',
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
        },
        {
          name: 'tripleImage',
          type: 'object',
          fields: [
            {
              name: 'mainImage',
              type: 'image',
            },
            {
              name: 'secondaryImage1',
              type: 'image',
            },
            {
              name: 'secondaryImage2',
              type: 'image',
            },
            {
              name: 'imageRight',
              title: 'Put main image on left',
              type: 'boolean',
            },
          ],
        },
      ],
    },
  ],
  initialValue: {
    date: new Date(),
  },
}
