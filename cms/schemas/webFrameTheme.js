export default {
  name: 'webFrameTheme',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'background',
      type: 'color',
      validation: Rule => Rule.required(),
    },
    {
      name: 'frame',
      type: 'color',
      validation: Rule => Rule.required(),
    },
    {
      name: 'dots',
      type: 'color',
    },
  ],
}
