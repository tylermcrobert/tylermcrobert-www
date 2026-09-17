import {defineCliConfig} from 'sanity/cli'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineCliConfig({
  api: {
    projectId: process.env.SANITY_STUDIO_PROJECT_ID,
    dataset: process.env.SANITY_STUDIO_DATASET,
  },
  vite: {
    plugins: [tsconfigPaths()],
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
