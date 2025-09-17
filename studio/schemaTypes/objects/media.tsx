import {MediaInput} from '@components'
import {defineField, defineType, Rule} from 'sanity'

export default defineType({
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

    {
      title: 'Video',
      name: 'video',
      type: 'mux.video',
      hidden: ({parent}) => {
        return !!parent?.image
      },
      options: {
        collapsable: false,
      },
    },

    {
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
    },

    {
      name: 'customVideoPlayback',
      type: 'media.videoPlaybackSettings',
      options: {collapsed: false},
      hidden: ({parent}) => {
        return parent?.playbackSettings !== 'custom'
      },
    },

    {
      name: 'showVideoControls',
      type: 'boolean',
      deprecated: {reason: 'Use settings instead'},
      hidden: true,
    },

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

export const mediaPlaybackSettings = defineType({
  name: 'media.videoPlaybackSettings',
  type: 'object',
  options: {collapsed: false},
  fields: [
    {
      name: 'controls',
      type: 'boolean',
      description: 'Displays video controls including play/pause',
      initialValue: true,
    },

    {
      name: 'autoplay',
      type: 'boolean',
      description: 'Automatically play video when video is in view',
      initialValue: false,
    },

    {
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
    },

    {
      name: 'loop',
      type: 'boolean',
      description: 'Restarts the video when it reaches the end.',
      initialValue: false,
    },
  ],
})

/**
 * Checks if the video or audio fields are both undefined
 */
export function mediaRequired(Rule: Rule) {
  return Rule.custom((data: {image?: unknown; video?: unknown}) => {
    if (!(!!data.image || !!data.video)) {
      return 'An image or video is required.'
    }

    return true
  })
}

/**
 * For use in object previews. Selects the projected image and video assets. `path` selects the media object
 */
export function selectMedia(path: string | null) {
  const p = path ? `${path}.` : ''
  return {
    image: `${p}image`,
    imageFileName: `${p}image.asset.originalFilename`,
    posterFrame: `${p}posterFrame`,
    videoPlaybackId: `${p}video.asset.playbackId`,
    thumbTime: `${p}video.asset.thumbTime`,
    videoFilename: `${p}video.asset.filename`,
  }
}

/**
 * Takes the props selected from selectMedia and formats them for the preview
 */

export function prepareMedia({
  videoPlaybackId,
  image,
  videoFilename,
  posterFrame,
  imageFileName,
  thumbTime,
}: Record<keyof ReturnType<typeof selectMedia>, any>) {
  if (!videoPlaybackId && !image) {
    return {
      subtitle: 'No media selected',
    }
  }

  if (videoPlaybackId) {
    return {
      subtitle: `Video${videoFilename ? `: ${videoFilename}` : ''}`,
      media: (() => {
        if (posterFrame) {
          return posterFrame
        }

        if (videoPlaybackId) {
          return () => (
            <img
              alt="Video thumbnail"
              style={{width: '100%', height: '100%', objectFit: 'cover'}}
              src={`https://image.mux.com/${videoPlaybackId}/thumbnail.jpg?fit=crop&width=100&height=100&time=${thumbTime || 0}`}
            />
          )
        }
      })(),
    }
  }

  return {
    subtitle: `Image: ${imageFileName}`,
    media: image,
  }
}
