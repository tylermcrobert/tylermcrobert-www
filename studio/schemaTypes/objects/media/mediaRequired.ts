import {Rule} from 'sanity'

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
