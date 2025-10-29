import {defineField, defineType} from 'sanity'

import {MediaPlaybackSettingsInput} from './components/MediaPlaybackSettingsInput'

export const mediaPlaybackSettings = defineType({
  name: 'media.videoPlaybackSettings',
  type: 'object',
  options: {collapsed: false},
  components: {input: MediaPlaybackSettingsInput},
  fields: [
    defineField({
      name: 'controls',
      type: 'boolean',
      description: 'Displays video controls including play/pause',
      initialValue: true,
    }),

    defineField({
      name: 'autoplay',
      type: 'boolean',
      description: 'Automatically play video when video is in view',
      initialValue: false,
      validation: (rule) =>
        rule
          .custom((autoplay, {parent}: any) => {
            return !autoplay && parent?.controls === false
              ? 'Video must autoplay when controls are disabled'
              : true
          })
          .error(),
    }),

    defineField({
      name: 'muted',
      type: 'boolean',
      description: 'Video starts muted. Required for autoplaying videos',
      initialValue: false,
      validation: (rule) =>
        rule
          .custom((muted, {parent}: any) => {
            return parent?.autoplay && !muted ? 'Autoplaying videos must be muted' : true
          })
          .error(),
    }),

    defineField({
      name: 'loop',
      type: 'boolean',
      description: 'Restarts the video when it reaches the end.',
      initialValue: false,
    }),
  ],
})
