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
          ],
        },
      ],
    },
  ],
  initialValue: {
    date: new Date(),
  },
}
