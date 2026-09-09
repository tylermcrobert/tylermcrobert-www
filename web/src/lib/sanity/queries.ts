import type { InputValue } from '@portabletext/svelte';
import type { FilterByType, Get } from '@sanity/codegen';
import groq from 'groq';

import type { InfoQueryResult, ROOT_SLUG_QUERYResult } from './types';

/*******************************************************************************
 * PROJECTIONS
 ******************************************************************************/

export const LINK_PROJECTION = groq`{
  label,
  href,
  reference-> {
    _type,
    title,
    "slug": slug.current 
  }
}`;

export type LinkProjection = NonNullable<Get<InfoQueryResult, 'links', number, 'link'>>;

const RICH_TEXT_PROJECTION = groq`{
  ...,
 "markDefs": coalesce(
    markDefs[]{
      ...,
      _type == "internalLink" => {
        'type': @.reference->_type,
        "slug": @.reference->slug.current
      }
    }, 
    []
  )
}`;

export type RichTextProjection = InputValue;

export const MEDIA_PROJECTION = groq`{
  "_type": "mediaProjection",
  "asset": select(
    defined(@.image) => {
      "_type": "image",
      "image": @.image
    },
    defined(@.video.asset) => {
      "_type": "video",
      "video": @.video.asset-> {
        "playbackId": playbackId,
        "aspect": data.aspect_ratio,
        "poster": ^.poster,
        "playbackSettings": ^.playbackSettings,
        "customVideoPlayback": ^.customVideoPlayback,
      }
    },
    null
  ),
}`;

export type MediaProjectionImage = Get<FilterByType<MediaProjectionAsset, 'image'>, 'image'>;
export type MediaProjectionVideo = NonNullable<Get<FilterByType<MediaProjectionAsset, 'video'>, 'video'>>;
export type MediaProjectionAsset = NonNullable<Get<MediaBlockProjection, 'media', 'asset'>>;
export type MediaProjection = NonNullable<Get<MediaBlockProjection, 'media'>>;

/*******************************************************************************
 * MODULES
 ******************************************************************************/

const MODULE_TEXT_BLOCK = `// groq
  _type == 'textBlock' => {
    richText[]${RICH_TEXT_PROJECTION},
  }
`;

const MODULE_MEDIA_BLOCK = `// groq
  _type == 'mediaBlock' => {
    media${MEDIA_PROJECTION},
    aspect
  }
`;

const MODULE_WEBSITE = `//groq
  _type == 'website' => {
    backgroundImg,
    "backgroundColor": backgroundColor.hex,
    showFrame,
    media${MEDIA_PROJECTION},
  }
`;

const MODULE_DIPTYCH = `//groq
  _type == 'diptych' => {
    items[]{
      _key,
      _type,

      _type == 'diptych.media' => {
        media${MEDIA_PROJECTION},
        aspect,
      },
      
      _type == 'diptych.text' => {
        richText[]${RICH_TEXT_PROJECTION}
      }
    }
  }
`;

const MODULE_TRIPLE_IMAGE = `//groq
  _type == 'tripleImage' => {
    mainMedia${MEDIA_PROJECTION},
    secondaryMedia1${MEDIA_PROJECTION},
    secondaryMedia2${MEDIA_PROJECTION},
    imageRight,
  }
`;

const MODULE_MOBILE_WEBSITE = `//groq
  _type == 'mobileWebsite' => {
    "themeBackground": theme->.background.hex,
    frames[]{
      _key,
      _type == 'mobileWebsite.item' => {
        media${MEDIA_PROJECTION}
      }
    }
  }
`;

/**
 * Timed Slides
 */

const MODULE_TIMED_SLIDES = `//groq
  _type == 'timedSlides' => {
    images,
    seconds,
    'background': background.hex
  }
`;

/**
 * Playlist Block
 */

const PLAYLIST_PROJECTION = groq`{
  "slug": slug.current,
  link,
  title,
  duration, 
  date,
  image,
  tracks[]{
    image,
    title, 
    duration, 
    artists,
  }
}`;

const MODULE_PLAYLIST_BLOCK = `//groq
  _type == 'playlistBlock' => {
    playlist->${PLAYLIST_PROJECTION}
  }
`;

/**
 * Modules
 */

const MODULES_PROJECTION = groq`{
  _type,
  _key,
  ${MODULE_MEDIA_BLOCK},
  ${MODULE_TEXT_BLOCK},
  ${MODULE_WEBSITE},
  ${MODULE_DIPTYCH},
  ${MODULE_TRIPLE_IMAGE},
  ${MODULE_MOBILE_WEBSITE},
  ${MODULE_TIMED_SLIDES},
  ${MODULE_PLAYLIST_BLOCK}
}
`;

type ModuleProjection = Get<ROOT_SLUG_QUERYResult, 'modules', number>;

export type MediaBlockProjection = FilterByType<ModuleProjection, 'mediaBlock'>;
export type ModuleTextBlock = FilterByType<ModuleProjection, 'textBlock'>;
export type ModuleDiptych = FilterByType<ModuleProjection, 'diptych'>;
export type ModuleTripleImage = FilterByType<ModuleProjection, 'tripleImage'>;
export type ModuleWebsite = FilterByType<ModuleProjection, 'website'>;
export type ModuleMediaBlock = FilterByType<ModuleProjection, 'mediaBlock'>;
export type ModuleMobileWebsite = FilterByType<ModuleProjection, 'mobileWebsite'>;
export type ModulePlaylistBlock = FilterByType<ModuleProjection, 'playlistBlock'>;
export type ModuleTimedSlides = FilterByType<ModuleProjection, 'timedSlides'>;

export type Module = { _key: string } & (
	| ModuleMediaBlock
	| ModuleTextBlock
	| ModuleWebsite
	| ModuleDiptych
	| ModuleTripleImage
	| ModuleMobileWebsite
	| ModulePlaylistBlock
	| ModuleTimedSlides
);

/*******************************************************************************
 * PAGES
 ******************************************************************************/

export const ROOT_SLUG_QUERY = groq`
  *[(_type == 'caseStudy' || _type == 'page') && slug.current == $slug][0]{
    _type,
    _id,

    _type == 'caseStudy' => {
      "caseStudy": {
        intro,
        deliverables,
        date,
        title,
        description,
        browserFrame,
        "defaultBrowserFrame": *[_id == "settings"][0].defaultBrowserFrameV2
      },
    },
    
    title,
    metadata,
    modules[]${MODULES_PROJECTION},
  }
`;

/**
 * Info
 */

export const infoQuery = groq`
  *[_type == 'info' ][0]{
    metadata,
    bio,
    title,
    clients,
    links[]{
      label,
      link${LINK_PROJECTION}
    },
    playlists[]-> {
      "slug": slug.current,
      link,
      title,
      duration, 
      date 
    }
  }
`;

/**
 * Playlist
 */

export const PLAYLIST_QUERY = groq`
  *[_type == 'playlist' && slug.current == $slug][0]${PLAYLIST_PROJECTION}
`;

/*******************************************************************************
 * GLOBAL
 ******************************************************************************/

export const SITE_QUERY = groq`{
  "homepageTitle": *[_id == 'homepage'][0].homepageMetaTitle,
  "settings": *[_id == "settings" && _type == "settings"][0]{
    metadata,
    siteTitle,
    googleAnalyticsId,
  },
  "context": coalesce(
    *[_type == "context" && slug.current == $contextSlug][0],
    *[_id == "homepage"][0].context->
  ) {
    title,
    caseStudies[]->{
      "slug": slug.current,
      title,
    }
  },
}`;

export const SITEMAP_QUERY = groq`{
  "info": *[_id == 'info'][0],
  "projects": *[_id == "homepage"][0].context->caseStudies[]->{ 
    title,
    "slug": slug.current,
    _updatedAt,
  },
  "pages": *[_type == "page"]{
    "slug": slug.current,
    _updatedAt,
  }
}`;

/*******************************************************************************
 * UTILLS
 ******************************************************************************/

export type Nullable<T> = {
	[P in keyof T]: T[P] | null;
};
