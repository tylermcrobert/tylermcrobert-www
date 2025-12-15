import {defineField, defineType} from 'sanity'

export const icon = () => '⚙️'

export const settings = defineType({
  name: 'settings',
  type: 'document',
  icon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      initialValue: 'Settings',
      hidden: true,
    }),

    defineField({
      type: 'string',
      name: 'siteTitle',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'googleAnalyticsId',
      title: 'Google Analytics ID',
      type: 'string',
      description:
        'To find your Measurement ID, go to Google Analytics > Admin > Data Streams > Select your stream > Copy the Measurement ID.',
      validation: (Rule) =>
        Rule.regex(/^G-[A-Z0-9]+$/, {
          name: 'Google Analytics Measurement ID',
          invert: false,
        }).error('Must be a valid GA4 Measurement ID, e.g., G-XXXXXXXXXX'),
    }),

    defineField({
      name: 'defaultBrowserFrame',
      description: 'When browser frames are not specified for a block, this will be used.',
      type: 'reference',
      to: [{type: 'webFrameTheme'}],
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'metadata',
      type: 'metadata',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    prepare: () => ({title: 'Settings'}),
  },
})
