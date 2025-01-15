import page from './documents/page'
import homepage from './documents/homepage'
import navigation from './documents/navigation'
import link from './objects/link'
import metadata from './objects/metadata'
import settings from './documents/settings'
import footer from './documents/footer'
import richText, {
  richTextMinimal,
  richTextSimple,
  richTextInternalLink,
  richTextExternalLink,
} from './objects/richText'
import modules from './modules/modules'
import textBlock from './modules/textBlock'
import media from './objects/media'
import mediaBlock from './modules/mediaBlock'

export const schemaTypes = [
  mediaBlock,
  media,
  textBlock,
  modules,
  richTextInternalLink,
  richTextExternalLink,
  richText,
  richTextMinimal,
  richTextSimple,
  metadata,
  footer,
  link,
  navigation,
  homepage,
  page,
  settings,
]
