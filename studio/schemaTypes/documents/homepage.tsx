import {defineType} from 'sanity'

export const icon = () => '🏡'

export default defineType({
  name: 'homepage',
  type: 'document',
  icon,
  fields: [
    {
      name: 'title',
      type: 'string',
    },
    {
      name: 'modules',
      type: 'modules',
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Homepage',
      }
    },
  },
})
