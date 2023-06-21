import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {colorInput} from '@sanity/color-input'
import {DocumentIcon} from '@sanity/icons'
import {media} from 'sanity-plugin-media'

export default defineConfig({
  name: 'default',
  title: 'Tyler McRobert',

  projectId: 'n1wxk3oc',
  dataset: 'production',

  plugins: [
    deskTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Info')
              .id('info')
              .icon(DocumentIcon)
              .child(S.document().schemaType('info').documentId('info')),
            S.divider(),
            S.documentTypeListItem('caseStudy'),
            S.documentTypeListItem('webFrameTheme'),
            S.documentTypeListItem('playlist'),
            S.documentTypeListItem('song'),
          ]),
    }),
    visionTool(),
    media(),
    colorInput(),
  ],

  schema: {
    types: schemaTypes,
  },

  document: {
    productionUrl: async (prev, context) => {
      const url = 'http://localhost:5173/api/preview'

      const {document} = context
      const slug = (document.slug as any)?.current

      if (!slug) return prev

      if (document._type === 'caseStudy') {
        const params = new URLSearchParams()
        params.set('type', 'caseStudy')
        params.set('slug', slug)

        return `${url}/?${params}`
      }

      return prev
    },
  },
})
