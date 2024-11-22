import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {structure} from './desk'

const PROJECT_ID = 'imer5y0j'
const TITLE = 'Svelte Sanity Starter'
const STAGING_URL = 'https://example.com'
const CREATABLE_DOCTYPES = ['page']

export default defineConfig({
  name: 'default',
  title: TITLE,

  projectId: PROJECT_ID,
  dataset: 'production',

  plugins: [structureTool({structure}), visionTool()],

  schema: {
    types: schemaTypes,
  },

  document: {
    newDocumentOptions: (item) => {
      return item.filter((item) => CREATABLE_DOCTYPES.includes(item.templateId))
    },

    productionUrl: async (prev, context) => {
      const isDev = window.location.host === 'localhost:3333'
      const baseUrl = isDev ? 'http://localhost:5173' : STAGING_URL

      const slug = (context.document as any)?.slug?.current
      const type = (context.document as any)._type

      const params = new URLSearchParams()

      params.set('slug', slug)
      params.set('type', type)

      return `${baseUrl}/api/draft?${params}`
    },
  },
})
