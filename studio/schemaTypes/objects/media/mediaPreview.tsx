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
