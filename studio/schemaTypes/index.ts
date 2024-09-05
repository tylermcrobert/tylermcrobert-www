import page from './documents/page'
import homepage from './documents/homepage'
import navigation from './documents/navigation'
import link from './objects/link'
import metadata from './objects/metadata'
import settings from './documents/settings'
import footer from './documents/footer'
import {richTextMinimal, richText} from './objects/richText'
import modules from './modules/modules'
import textBlock from './modules/textBlock'
import media from './objects/media'
import mediaBlock from './modules/mediaBlock'

export const schemaTypes = [
  mediaBlock,
  media,
  textBlock,
  modules,
  richText,
  richTextMinimal,
  metadata,
  footer,
  link,
  navigation,
  homepage,
  page,
  settings,
]
