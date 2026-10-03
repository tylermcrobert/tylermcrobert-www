import {Rule} from 'sanity'

/**
 * Checks if the image or videoPlayer fields are both undefined
 */
export function mediaRequired(Rule: Rule) {
  return Rule.custom((data: {image?: unknown; videoPlayer?: unknown}) => {
    if (!(!!data.image || !!data.videoPlayer)) {
      return 'An image or video is required.'
    }

    return true
  })
}
