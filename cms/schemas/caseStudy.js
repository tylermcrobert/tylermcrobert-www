import { website, websiteFields, websiteMedia } from './website'

const ASPECT = [
  [5, 4],
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

const toUppercase = s => s.charAt(0).toUpperCase() + s.substring(1)

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
          title: 'Image',
          name: 'dynamicImage',
          type: 'object',
          fields: [
            {
              name: 'image',
              type: 'image',
              options: {
                hotspot: true,
              },
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

            {
              name: 'span',
              type: 'string',
              options: {
                layout: 'radio',
                list: ['full', 'half'],
              },
            },
          ],
          preview: {
            select: {
              media: 'image',
              layout: 'span',
            },
            prepare: prev => {
              return {
                ...prev,
                title: `${prev.layout ? toUppercase(prev.layout) : ''} Image`,
              }
            },
          },
        },

        // /**
        //  * Single Image
        //  */
        // {
        //   name: 'singleImage',
        //   type: 'object',
        //   fields: [
        //     {
        //       name: 'image',
        //       type: 'image',
        //       validation: Rule => Rule.required(),
        //       options: {
        //         hotspot: true,
        //       },
        //     },
        //   ],
        //   preview: {
        //     select: {
        //       media: 'image',
        //     },
        //     prepare: prev => ({ ...prev, title: 'Single Image' }),
        //   },
        // },
        // /**
        //  * Double Image
        //  */
        // {
        //   name: 'doubleImage',
        //   type: 'object',
        //   fields: [
        //     {
        //       name: 'leftImage',
        //       type: 'image',
        //       options: {
        //         hotspot: true,
        //       },
        //     },
        //     {
        //       name: 'rightImage',
        //       type: 'image',
        //       options: {
        //         hotspot: true,
        //       },
        //     },
        //     {
        //       name: 'aspect',
        //       type: 'number',
        //       options: {
        //         list: ASPECT.map(({ num, aspect }) => ({
        //           value: num,
        //           title: aspect,
        //         })),
        //       },
        //     },
        //   ],
        //   preview: {
        //     select: {
        //       media: 'leftImage',
        //     },
        //     prepare: prev => ({ ...prev, title: 'Double Image' }),
        //   },
        // },
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

        website,

        {
          name: 'mobileWebsite',
          type: 'object',
          fields: [
            {
              type: 'array',
              name: 'frames',
              of: [...websiteMedia],
            },
          ],
        },

        /**
         * Text
         */

        {
          name: 'textBlock',
          type: 'object',
          fields: [
            {
              name: 'content',
              type: 'array',
              of: [{ type: 'block' }],
            },
          ],
          preview: {
            select: {
              title: 'content',
            },
          },
        },

        /**
         * Text
         */

        {
          name: 'spacer',
          type: 'object',
          fields: [
            {
              name: 'uselessInput',
              type: 'string',
            },
          ],
          preview: {
            prepare: prev => ({ ...prev, title: 'Spacer' }),
          },
        },
      ],
    },
  ],
  initialValue: {
    date: new Date(),
  },
}
