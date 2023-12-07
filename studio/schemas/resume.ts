import {defineField} from 'sanity'

export default {
  name: 'resume',
  title: 'Resume',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'showClient',
      type: 'boolean',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'bio',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'experience',
      type: 'array',
      of: [
        {
          name: 'experienceItem',
          type: 'object',
          fields: [
            {
              type: 'string',
              name: 'name',
              validation: (Rule) => Rule.required(),
            },

            {
              name: 'startDate',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },

            {
              type: 'string',
              name: 'endDate',
            },

            {
              type: 'string',
              name: 'jobTitle',
              validation: (Rule) => Rule.required(),
            },

            {
              name: 'clients',
              type: 'array',
              of: [{type: 'string'}],
            },

            {
              name: 'statements',
              type: 'array',
              of: [
                {
                  name: 'statement',
                  type: 'object',
                  fields: [
                    {
                      name: 'body',
                      title: 'Body',
                      type: 'array',
                      of: [
                        {
                          type: 'block',
                          styles: [{title: 'Normal', value: 'normal'}],
                          lists: [],
                        },
                      ],
                    },
                  ],
                },
              ],
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],

      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'softSkills',
      type: 'array',
      of: [{type: 'string'}],
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'technicalSkills',
      type: 'array',
      of: [
        {
          name: 'category',
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),

            {
              name: 'skills',
              type: 'array',
              of: [{type: 'string'}],
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
  ],
}
