import {defineType} from 'sanity'

export default defineType({
  name: 'modules',
  type: 'array',
  of: [
    {type: 'textBlock'},
    {type: 'mediaBlock'},
    {type: 'website'},
    {type: 'diptych'},
    {type: 'mobileWebsite'},
  ],
})
