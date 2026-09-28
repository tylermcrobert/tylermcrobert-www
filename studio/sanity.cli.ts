import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: process.env.SANITY_STUDIO_PROJECT_ID,
    dataset: process.env.SANITY_STUDIO_DATASET,
  },
  vite: {
    resolve: {
      tsconfigPaths: true,
    },
  },
  schemaExtraction: {
    enabled: true,
  },
  typegen: {
    enabled: true,
    path: ['../web/src/**/*.{ts,tsx,js,jsx,svelte}'],
    schema: 'schema.json',
    generates: '../web/src/lib/sanity/types.ts',
    overloadClientMethods: true,
  },
})
