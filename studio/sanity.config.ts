import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {structure} from './desk'

export default defineConfig({
  name: 'default',
  title: 'Svelte Sanity Starter',

  projectId: 'tjt0kiru',
  dataset: 'production',

  plugins: [structureTool({structure}), visionTool()],

  schema: {
    types: schemaTypes,
  },

  document: {
    productionUrl: async (prev, context) => {
      const isDev = window.location.host === 'localhost:3333'
      const baseUrl = isDev ? 'http://localhost:5173' : 'https://ffwd-www.vercel.app'

      const slug = (context.document as any)?.slug?.current
      const type = (context.document as any)._type

      const params = new URLSearchParams()

      params.set('slug', slug)
      params.set('type', type)

      return `${baseUrl}/api/draft?${params}`
    },
  },
})
