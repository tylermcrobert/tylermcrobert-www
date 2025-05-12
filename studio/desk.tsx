import type {StructureResolver} from 'sanity/structure'

import {icon as navIcon} from './schemaTypes/documents/navigation'
import {icon as footerIcon} from './schemaTypes/documents/footer'
import {icon as homepageIcon} from './schemaTypes/documents/homepage'
import {icon as settingsIcon} from './schemaTypes/documents/settings'

export const structure: StructureResolver = (S) => {
  return S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Homepage')
        .icon(homepageIcon)
        .child(S.editor().schemaType('homepage').documentId('homepage')),
      S.divider(),
      S.documentTypeListItem('page').title('Pages'),
      S.divider(),
      S.listItem()
        .title('Navigation')
        .icon(navIcon)
        .child(S.editor().schemaType('navigation').documentId('navigation')),
      S.listItem()
        .title('Footer')
        .icon(footerIcon)
        .child(S.editor().schemaType('footer').documentId('footer')),
      S.listItem()
        .title('Settings')
        .icon(settingsIcon)
        .child(S.editor().schemaType('settings').documentId('settings')),
    ])
}
