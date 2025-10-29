import {defineField, defineType} from 'sanity'

import {MediaInput} from './components/MediaInput'
import {prepareMedia, selectMedia} from './mediaPreview'

export const media = defineType({
  name: 'media',
  type: 'object',
  components: {input: MediaInput},
  fields: [
    defineField({
      name: 'image',
      type: 'image',
      options: {
        hotspot: true,
      },
      hidden: ({parent}) => {
        return !!parent?.video
      },
    }),

    defineField({
      title: 'Video',
      name: 'video',
      type: 'mux.video',
      hidden: ({parent}) => {
        return !!parent?.image
      },
      options: {
        collapsable: false,
      },
    }),

    defineField({
      name: 'playbackSettings',
      type: 'string',
      options: {
        list: [
          {value: 'autoplay', title: 'Autoplay + No Controls'},
          {value: 'controls', title: 'Controls + Initially Paused'},
          {value: 'custom', title: 'Custom...'},
        ],
      },
      initialValue: 'autoplay',
      hidden: ({parent}) => {
        return !parent?.video
      },
      validation: (rule) =>
        rule
          .custom((playbackSettings, {parent}: any) =>
            parent?.video && !playbackSettings ? 'Playback settings are required' : true,
          )
          .error(),
    }),

    defineField({
      name: 'customVideoPlayback',
      type: 'media.videoPlaybackSettings',
      options: {collapsed: false},
      hidden: ({parent}) => {
        return !parent?.video || parent?.playbackSettings !== 'custom'
      },
    }),

    {
      name: 'poster',
      type: 'image',
      initialValue: false,
      hidden: ({parent}) => {
        const notVideo = !parent?.video?.asset
        const controlsPreset = parent?.playbackSettings === 'controls'
        const isAutoplay = parent?.customVideoPlayback?.autoplay === true

        return notVideo || (!controlsPreset && isAutoplay)
      },
    },
  ],
  preview: {
    select: {
      ...selectMedia(null),
    },
    prepare: (p) => {
      return {
        media: prepareMedia(p).media,
        title: prepareMedia(p).subtitle,
      }
    },
  },
})
