import page from './documents/page'
import homepage from './documents/homepage'
import link from './objects/link'
import metadata from './objects/metadata'
import settings from './documents/settings'
import context from './documents/context'
import caseStudy from './documents/caseStudy'
import playlist from './documents/playlist'
import webFrameTheme from './documents/webFrameTheme'
import info from './documents/info'
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
import website from './modules/website'
import diptych, {diptychMedia, diptychText, diptychSpacer} from './modules/diptych'
import aspect from './objects/aspect'
import mobileWebsite from './modules/mobileWebsite'

export const schemaTypes = [
  mobileWebsite,
  aspect,
  diptychSpacer,
  diptychMedia,
  diptychText,
  diptych,
  website,
  info,
  webFrameTheme,
  playlist,
  caseStudy,
  context,
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
  link,
  homepage,
  page,
  settings,
]
