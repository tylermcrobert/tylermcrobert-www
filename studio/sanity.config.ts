import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {structure} from './desk'
import {media} from 'sanity-plugin-media'
import {muxInput} from 'sanity-plugin-mux-input'
import {colorInput} from '@sanity/color-input'
import {defineDocuments, defineLocations, presentationTool} from 'sanity/presentation'

const CREATABLE_DOCTYPES = ['page', 'playlist', 'webFrameTheme', 'context', 'caseStudy']

export default defineConfig({
  name: 'default',
  title: process.env.SANITY_STUDIO_TITLE,

  projectId: process.env.SANITY_STUDIO_PROJECT_ID || '',
  dataset: 'production',

  plugins: [
    structureTool({structure}),
    media(),
    presentationTool({
      previewUrl: process.env.SANITY_STUDIO_PREVIEW_LINK || '',
      resolve: {
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
        mainDocuments: defineDocuments([
          {route: '/info', type: 'info'},
          {route: '/', type: 'homepage'},
        ]),
      },
    }),
    muxInput({
      max_resolution_tier: '2160p',
    }),
    colorInput(),
    ...(process.env.NODE_ENV === 'development' ? [visionTool()] : []),
  ],

  schema: {
    types: schemaTypes,
  },

  document: {
    newDocumentOptions: (item) => {
      return item.filter((item) => CREATABLE_DOCTYPES.includes(item.templateId))
    },

    productionUrl: async (prev, context) => {
      const isDev = window.location.host === 'localhost:3333'
      const baseUrl = isDev ? 'http://localhost:5173' : process.env.SANITY_STUDIO_PREVIEW_LINK

      const slug = (context.document as any)?.slug?.current
      const type = (context.document as any)._type

      const params = new URLSearchParams()

      params.set('slug', slug)
      params.set('type', type)

      return `${baseUrl}/api/draft?${params}`
    },
  },

  form: {
    image: {
      // Hiding sanity default from the asset source because it's conusing to have two ways to add images
      assetSources: (source) => source.filter((item) => item.name !== 'sanity-default'),
    },
  },
})
