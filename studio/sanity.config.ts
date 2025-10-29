import {colorInput} from '@sanity/color-input'
import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {presentationTool} from 'sanity/presentation'
import {structureTool} from 'sanity/structure'
import {media} from 'sanity-plugin-media'
import {muxInput} from 'sanity-plugin-mux-input'

import {structure} from './config/desk'
import {presentationOptions} from './config/presentation'
import {schemaTypes} from './schemaTypes'

const CREATABLE_DOCTYPES = ['page', 'playlist', 'webFrameTheme', 'context', 'caseStudy']

export default defineConfig({
  name: 'default',
  title: process.env.SANITY_STUDIO_TITLE!,
  projectId: process.env.SANITY_STUDIO_PROJECT_ID!,
  dataset: process.env.SANITY_STUDIO_DATASET!,

  plugins: [
    structureTool({
      title: 'Content',
      structure,
    }),
    presentationTool({
      title: 'Preview',
      ...presentationOptions,
    }),

    colorInput(),
    media(),
    muxInput({max_resolution_tier: '2160p'}),
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
      const slug = (context.document as any)?.slug?.current
      const type = (context.document as any)._type
      return `${process.env.SANITY_STUDIO_PREVIEW_LINK}/api/preview/redirect?slug=${slug}&type=${type}`
    },
  },

  form: {
    image: {
      // Hiding sanity default from the asset source because it's conusing to have two ways to add images
      assetSources: (source) => source.filter((item) => item.name !== 'sanity-default'),
    },
  },
})
