import {defineField} from 'sanity'
import React from 'react'

export default {
  name: 'webFrameTheme',
  type: 'document',
  title: 'Browser Frame Theme',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Theme Title',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'background',
      type: 'color',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'frame',
      type: 'color',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'dots',
      type: 'color',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      background: 'background',
      frame: 'frame',
    },
    prepare({background, frame, title}: any) {
      console.log()

      return {
        title,
        media: (
          <div
            style={{
              background: background?.hex,
              width: '100%',
              height: '100%',
            }}
          >
            <div
              style={{
                height: '50%',
                width: '100%',
                background: frame?.hex,
              }}
            ></div>
          </div>
        ),
      }
    },
  },
}
