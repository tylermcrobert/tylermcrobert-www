import {defineField, defineType, Rule} from 'sanity'

export default defineType({
  name: 'media',
  type: 'object',
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
      name: 'showVideoControls',
      type: 'boolean',
      initialValue: false,
      hidden: ({parent}) => {
        return !parent?.video
      },
    },

    {
      name: 'posterFrame',
      type: 'image',
      initialValue: false,
      hidden: ({parent}) => {
        return !(parent?.video && parent.showVideoControls)
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

/**
 * Checks if the video or audio fields are both undefined
 */
export function validateMedia(Rule: Rule) {
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
export function prepareMedia(selection: Record<keyof ReturnType<typeof selectMedia>, any>) {
  const {videoPlaybackId, image, videoFilename, posterFrame} = selection

  if (!videoPlaybackId && !image) {
    return {
      subtitle: 'No media selected',
    }
  }

  if (videoPlaybackId) {
    return {
      subtitle: `Video asset${videoFilename ? ` - ${videoFilename}` : ''}`,
      media: (() => {
        if (posterFrame) {
          return posterFrame
        }

        if (videoPlaybackId) {
          return () => (
            <img
              alt="Video thumbnail"
              style={{width: '100%', height: '100%', objectFit: 'cover'}}
              src={`https://image.mux.com/${videoPlaybackId}/thumbnail.jpg?fit=crop&width=100&height=100&time=${selection.thumbTime || 0}`}
            />
          )
        }
      })(),
    }
  }

  return {
    subtitle: selection.imageFileName,
    media: selection.image,
  }
}
