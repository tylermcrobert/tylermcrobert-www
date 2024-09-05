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
      initialValue: 'Homepage',
    },

    {
      name: 'modules',
      type: 'modules',
    },
  ],
})
