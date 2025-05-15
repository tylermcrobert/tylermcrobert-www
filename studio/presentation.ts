import {defineDocuments, type PresentationPluginOptions} from 'sanity/presentation'

export const presentationOptions: PresentationPluginOptions = {
  previewUrl: {
    origin: process.env.SANITY_STUDIO_PREVIEW_LINK || '',
    previewMode: {
      enable: '/preview/enable',
      disable: '/preview/disable',
    },
  },
  resolve: {
    // Automatically will switch to these documents when navigating in the Presentation Tool
    mainDocuments: defineDocuments([
      {route: '/', type: 'homepage'},
      {
        route: '/:slug',
        filter: `(_type == "page" || _type == "caseStudy") && slug.current == $slug`,
      },
    ]),

    // Adds link to Presentation Tool in in the structure
    locations: {
      caseStudy: {
        select: {title: 'title', slug: 'slug.current'},
        resolve: (doc) => ({locations: [{title: doc?.title, href: `/${doc?.slug}`}]}),
      },
      page: {
        select: {title: 'title', slug: 'slug.current'},
        resolve: (doc) => ({locations: [{title: doc?.title, href: `/${doc?.slug}`}]}),
      },
    },
  },
}
