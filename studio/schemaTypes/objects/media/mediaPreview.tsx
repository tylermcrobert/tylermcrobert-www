import {prepareVideo, selectVideo} from 'sanity-plugin-video-player'

/**
 * For use in object previews. Selects the projected image and video assets.
 * `path` selects the media object.
 */
export function selectMedia(path: string | null) {
  const p = path ? `${path}.` : ''

  return {
    image: `${p}image`,
    imageFileName: `${p}image.asset.originalFilename`,
    ...selectVideo(path ? `${path}.videoPlayer` : 'videoPlayer'),
  }
}

/**
 * Takes the props selected from selectMedia and formats them for the preview.
 */
export function prepareMedia({
  image,
  imageFileName,
  ...video
}: Record<keyof ReturnType<typeof selectMedia>, any>) {
  if (video.videoPlaybackId) {
    return prepareVideo(video)
  }

  if (!image) {
    return {subtitle: 'No media selected'}
  }

  return {
    subtitle: `Image: ${imageFileName}`,
    media: image,
  }
}
