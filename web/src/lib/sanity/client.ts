import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { groqStore } from '@sanity/groq-store';

const options = {
  dataset: 'production',
  projectId: 'n1wxk3oc',
  useCdn: process.env.NODE_ENV === 'production',
  apiVersion: '2023-06-02',
  withCredentials: true
};

export const sanityStore = groqStore({
  dataset: 'production',
  projectId: 'n1wxk3oc',
  listen: true,
  overlayDrafts: true,
  documentLimit: 10000,
  includeTypes: ['caseStudy']
});

export const client = createClient(options);

const builder = imageUrlBuilder(client);

export const urlFor = (source: SanityImageSource) => {
  return builder.image(source);
};
