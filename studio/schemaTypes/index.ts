import caseStudy from './documents/caseStudy'
import context from './documents/context'
import {homepage} from './documents/homepage'
import info from './documents/info'
import {page} from './documents/page'
import playlist from './documents/playlist'
import {settings} from './documents/settings'
import diptych, {diptychMedia, diptychSpacer, diptychText} from './modules/diptych'
import {mediaBlock} from './modules/mediaBlock'
import mobileWebsite, {mobileWebsiteItem} from './modules/mobileWebsite'
import {modules} from './modules/modules'
import playlistBlock from './modules/playlist'
import {textBlock} from './modules/textBlock'
import {tripleImage} from './modules/tripleImage'
import {website} from './modules/website'
import aspect from './objects/aspect'
import {browserFrame} from './objects/browserFrame'
import {link} from './objects/link'
import {media, mediaPlaybackSettings} from './objects/media'
import {metadata} from './objects/metadata'
import {
  richText,
  richTextExternalLink,
  richTextInternalLink,
  richTextMinimal,
  richTextSimple,
} from './objects/richText'

export const schemaTypes = [
  browserFrame,
  playlistBlock,
  mobileWebsiteItem,
  tripleImage,
  mobileWebsite,
  aspect,
  diptychSpacer,
  diptychMedia,
  diptychText,
  diptych,
  website,
  info,
  playlist,
  caseStudy,
  context,
  mediaBlock,
  media,
  mediaPlaybackSettings,
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
