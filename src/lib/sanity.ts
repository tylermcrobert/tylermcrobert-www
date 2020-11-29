import sanityClient from '@sanity/client'

import imageUrlBuilder from '@sanity/image-url'

const options = {
  dataset: 'production',
  projectId: 'n1wxk3oc',
  useCdn: process.env.NODE_ENV === 'production',
  // useCdn == true gives fast, cheap responses using a globally distributed cache.
  // Set this to false if your application require the freshest possible
  // data always (potentially slightly slower and a bit more expensive).
}

export const client = sanityClient(options)

export const previewClient = sanityClient({
  ...options,
  useCdn: false,
  token: process.env.SANITY_TOKEN,
})

const builder = imageUrlBuilder(client)

export const urlFor = (source: any) => {
  return builder.image(source)
}
