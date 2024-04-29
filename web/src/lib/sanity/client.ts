import { createClient } from '@sanity/client';
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
export const previewClient = createClient({ ...options, useCdn: false });
