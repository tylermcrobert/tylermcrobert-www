import {defineType} from 'sanity'

export const icon = () => '🏡'

export default defineType({
  name: 'homepage',
  type: 'document',
  icon,
  fields: [
    {
      type: 'string',
      name: 'title',
      hidden: true,
    },

    {
      name: 'modules',
      type: 'modules',
    },
  ],
})
