import type {StructureResolver} from 'sanity/structure'

import {icon as homepageIcon} from '../schemaTypes/documents/homepage'
import {icon as infoIcon} from '../schemaTypes/documents/info'
import {icon as settingsIcon} from '../schemaTypes/documents/settings'

export const structure: StructureResolver = (S) => {
  return S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Homepage')
        .icon(homepageIcon)
        .child(S.editor().schemaType('homepage').documentId('homepage').title('Homepage')),
      S.listItem()
        .title('Info')
        .icon(infoIcon)
        .child(S.editor().schemaType('info').documentId('info').title('Info')),

      S.divider(),
      S.documentTypeListItem('caseStudy').title('Case Studies'),
      S.documentTypeListItem('page').title('Pages'),
      S.documentTypeListItem('context').title('Contexts'),
      S.documentTypeListItem('playlist').title('Playlists'),
      S.documentTypeListItem('videoDocument').title('Videos'),
      S.divider(),

      S.listItem()
        .title('Settings')
        .icon(settingsIcon)
        .child(S.editor().schemaType('settings').documentId('settings')),
    ])
}
