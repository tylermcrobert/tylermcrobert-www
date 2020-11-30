// lib/sanity.js
import {
  createClient,
  createImageUrlBuilder,
  createPortableTextComponent,
  createPreviewSubscriptionHook,
  createCurrentUserHook,
} from 'next-sanity'
import { SanityImage } from 'types'

export { groq } from 'next-sanity'

/**
 * Sanity client options
 */
export const clientOptions = {
  dataset: 'production',
  projectId: 'n1wxk3oc',
  useCdn: process.env.NODE_ENV === 'production',
}

/**
 * Set up a helper function for generating Image URLs with only the asset reference data in your documents.
 * Read more: https://www.sanity.io/docs/image-url
 **/
export const urlFor = (source: SanityImage) =>
  createImageUrlBuilder(clientOptions).image(source)

/**
 * Live preview subsscription hook
 */
export const usePreviewSubscription = createPreviewSubscriptionHook(
  clientOptions
)

/**
 * Portable Text serialization
 */
export const PortableText = createPortableTextComponent({
  ...clientOptions,
  // Serializers passed to @sanity/block-content-to-react
  // (https://github.com/sanity-io/block-content-to-react)
  serializers: {},
})

// Set up the client for fetching data in the getProps page functions
export const client = createClient(clientOptions)

// Set up a preview client with serverless authentication for drafts
export const previewClient = createClient({
  ...clientOptions,
  useCdn: false,
  token: process.env.SANITY_TOKEN,
})

/**
 * Helper function for easily switching between normal client and preview client
 */
export const getClient = (usePreview: boolean = false) =>
  usePreview ? previewClient : client

/**
 * Helper function for using the current logged in user account
 */
export const useCurrentUser = createCurrentUserHook(clientOptions)
