export default {
  name: 'context',
  title: 'Context',
  type: 'document',
  fields: [
    {
      name: 'slug',
      title: 'slug',
      type: 'slug',
    },
    {
      name: 'title',
      type: 'string',
    },
    {
      name: 'caseStudies',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'caseStudy' }],
        },
      ],
    },
  ],
}
