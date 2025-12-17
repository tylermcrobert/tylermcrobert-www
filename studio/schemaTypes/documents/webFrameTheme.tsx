import {defineField} from 'sanity'

export const icon = () => '🧭'

export default defineField({
  name: 'webFrameTheme',
  type: 'document',
  icon,
  fields: [
    {
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },

    {
      name: 'background',
      type: 'color',
      validation: (Rule) => Rule.required(),
    },

    {
      name: 'foreground',
      type: 'color',
    },

    {
      name: 'frame',
      type: 'color',
      validation: (Rule) => Rule.required(),
    },

    {
      name: 'dots',
      type: 'color',
    },
  ],

  preview: {
    select: {
      title: 'title',
      background: 'background',
      dots: 'dots',
      frame: 'frame',
    },
    prepare({background, frame, title, dots}) {
      return {
        title,
        media: (
          <div
            style={{
              background: background?.hex,
              width: '100%',
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                height: '25%',
                width: '75%',
                display: 'flex',
                justifyContent: 'center',
                borderRadius: '2px',
                background: frame?.hex,
              }}
            ></div>
          </div>
        ),
      }
    },
  },
})
