import type { InputValue } from '@portabletext/svelte';
import type { FilterByType, Get } from '@sanity/codegen';
import { defineQuery } from '@sanity/sveltekit';

import type { INFO_QUERY_RESULT, ROOT_SLUG_QUERY_RESULT } from '$sanity/types';

/**
 * Projections
 */

export const LINK_PROJECTION = /* groq */ `{
  label,
  href,
  reference-> {
    _type,
    title,
    "slug": slug.current 
  }
}`;

export const RICH_TEXT_PROJECTION = /* groq */ `{
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

export const MEDIA_PROJECTION = /* groq */ `{
  "_type": "mediaProjection",
  "video": select(
    defined(videoPlayer.muxAsset.asset->playbackId) => videoPlayer {
      "playbackId": coalesce(muxAsset.asset->playbackId, ''),
      "aspect": muxAsset.asset->data.aspect_ratio,
      "poster": poster.asset->url,
      "playbackSettings": coalesce(playbackSettings, {
        "_type": "playbackSettings",
        "autoplay": true,
        "controls": false,
        "loop": true,
        "muted": true
      }),
      "hasSound": hasSound
    }
  ),
  image
}`;

export type LinkProjection = NonNullable<Get<INFO_QUERY_RESULT, 'links', number, 'link'>>;
export type RichTextProjection = InputValue;
export type MediaProjection = NonNullable<ModuleMediaBlock['media']>;

/**
 * Modules
 */

const MODULE_TEXT_BLOCK = /* groq */ `
  _type == 'textBlock' => {
    richText[]${RICH_TEXT_PROJECTION},
  }
`;

const MODULE_MEDIA_BLOCK = /* groq */ `
  _type == 'mediaBlock' => {
    media${MEDIA_PROJECTION},
    aspect
  }
`;

const MODULE_WEBSITE = /* groq */ `
  _type == 'website' => {
    backgroundImg,
    "backgroundColor": backgroundColor.hex,
    showFrame,
    media${MEDIA_PROJECTION},
  }
`;

const MODULE_DIPTYCH = /* groq */ `
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

const MODULE_TRIPLE_IMAGE = /* groq */ `
  _type == 'tripleImage' => {
    mainMedia${MEDIA_PROJECTION},
    secondaryMedia1${MEDIA_PROJECTION},
    secondaryMedia2${MEDIA_PROJECTION},
    imageRight,
  }
`;

const MODULE_MOBILE_WEBSITE = /* groq */ `
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

const MODULE_TIMED_SLIDES = /* groq */ `
  _type == 'timedSlides' => {
    images,
    seconds,
    'background': background.hex
  }
`;

const PLAYLIST_PROJECTION = /* groq */ `{
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

const MODULE_PLAYLIST_BLOCK = /* groq */ `
  _type == 'playlistBlock' => {
    playlist->${PLAYLIST_PROJECTION}
  }
`;

export const MODULES_PROJECTION = /* groq */ `{
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

export type Module = NonNullable<Get<ROOT_SLUG_QUERY_RESULT, 'modules', number>>;
export type ModuleTextBlock = FilterByType<Module, 'textBlock'>;
export type ModuleDiptych = FilterByType<Module, 'diptych'>;
export type ModuleTripleImage = FilterByType<Module, 'tripleImage'>;
export type ModuleWebsite = FilterByType<Module, 'website'>;
export type ModuleMediaBlock = FilterByType<Module, 'mediaBlock'>;
export type ModuleMobileWebsite = FilterByType<Module, 'mobileWebsite'>;
export type ModulePlaylistBlock = FilterByType<Module, 'playlistBlock'>;
export type ModuleTimedSlides = FilterByType<Module, 'timedSlides'>;

/**
 * Pages
 */

export const ROOT_SLUG_QUERY = defineQuery(`
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
`);

export const PAGE_SLUGS_QUERY = defineQuery(`
  *[_type == "page"]{
    "slug": slug.current,
  }[defined(slug)]
`);

/**
 * Info
 */

export const INFO_QUERY = defineQuery(`
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
`);

/**
 * Playlist
 */

export const PLAYLIST_QUERY = defineQuery(`
  *[_type == 'playlist' && slug.current == $slug][0]${PLAYLIST_PROJECTION}
`);

/**
 * Global
 */

export const SITE_QUERY = defineQuery(`{
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
    caseStudies[]{
      "slug": @->slug.current,
      "title": @->title,
    }[defined(slug)]
  },
}`);

export const SITEMAP_QUERY = defineQuery(`{
  "info": *[_id == 'info'][0],
  "projects": *[_type == "caseStudy" && _id in *[_id == "homepage"][0].context->caseStudies[]->_id]{
    title,
    "slug": slug.current,
    _updatedAt,
  }[defined(slug)],
  "pages": *[_type == "page"]{
    "slug": slug.current,
    _updatedAt,
  }[defined(slug)]
}`);
