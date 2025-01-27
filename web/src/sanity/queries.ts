import groq from 'groq';
import type {
	SanityImageAsset,
	Settings,
	PAGE_QUERYResult,
	CASE_STUDY_QUERYResult,
	Website,
	SITE_QUERYResult,
	MediaBlock,
	DiptychMedia
} from './types';
import type { InputValue } from '@portabletext/svelte';

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

export type LinkProjection = {
	label: string;
	href: string;
	reference?: {
		_type: string;
		title: string;
		slug: string;
	};
};

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
  "image": image,
  "video": video.asset->{
    "id": playbackId,
    "aspect": data.aspect_ratio,
    "showControls": ^.showVideoControls,
    "posterFrame": ^.posterFrame
  }
}`;

export type MediaProjectionVideo = {
	id: string;
	aspect: string;
	showControls: boolean;
	posterFrame: SanityImageAsset;
};

export type MediaProjection = Nullable<{
	image: SanityImageAsset;
	video: MediaProjectionVideo;
}>;

/*******************************************************************************
 * MODULES
 ******************************************************************************/

/**
 * Text Block
 */

const MODULE_TEXT_BLOCK = `// groq
  _type == 'textBlock' => {
    richText[]${RICH_TEXT_PROJECTION},
  }
`;

export type ModuleTextBlock = Nullable<{
	_type: 'textBlock';
	richText: RichTextProjection;
}>;

/**
 * Media Block
 */

const MODULE_MEDIA_BLOCK = `// groq
  _type == 'mediaBlock' => {
    media${MEDIA_PROJECTION},
    aspect
  }
`;

export type ModuleMediaBlock = Nullable<{
	_type: 'mediaBlock';
	media: MediaProjection;
}> &
	Pick<MediaBlock, 'aspect'>;

/**
 * Website
 */

const MODULE_WEBSITE = `//groq
  _type == 'website' => {
    theme->{
      "dots": dots.hex,
      "frame": frame.hex,
      "background": background.hex,
    },
    backgroundImg,
    showFrame,
    media${MEDIA_PROJECTION},
  }
`;

export type ModuleWebsite = Nullable<{
	_type: 'website';
	media: MediaProjection;
	theme: Nullable<{
		frame: string;
		background: string;
		dots: string;
	}>;
}> &
	Pick<Website, 'showFrame' | 'backgroundImg'>;

/**
 * Diptych
 */

const MODULE_DIPTYCH = `//groq
  _type == 'diptych' => {
    items[]{
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

export type ModuleDiptych = Nullable<{
	_type: 'diptych';
	items: (
		| Nullable<{
				_type: 'diptych.text';
				richText: RichTextProjection;
		  }>
		| (Nullable<{
				_type: 'diptych.media';
				media: MediaProjection | null;
		  }> &
				Pick<DiptychMedia, 'aspect'>)
	)[];
}>;

/**
 * Modules
 */

const MODULES_PROJECTION = groq`{
  _type,
  ${MODULE_MEDIA_BLOCK},
  ${MODULE_TEXT_BLOCK},
  ${MODULE_WEBSITE},
  ${MODULE_DIPTYCH}
}
`;

export type Module =
	| ModuleMediaBlock
	| ModuleTextBlock
	| ModuleWebsite
	| ModuleDiptych;

/*******************************************************************************
 * PAGES
 ******************************************************************************/

export const PAGE_QUERY = groq`
  *[_type == 'page' && slug.current == $slug][0]{
    title,
    metadata,
    modules[]${MODULES_PROJECTION},
  }
`;

export type PageQuery = PAGE_QUERYResult & Nullable<{ modules: Module[] }>;

export const CASE_STUDY_QUERY = groq`
  *[_type == 'caseStudy' && slug.current == $slug][0]{
    intro,
    deliverables,
    date,
    title,
    description,
    metadata,
    "modules": modulesV2[]${MODULES_PROJECTION},
  }
`;

export type CaseStudyQuery = CASE_STUDY_QUERYResult &
	Nullable<{ modules: Module[] }>;

/*******************************************************************************
 * GLOBAL
 ******************************************************************************/

export const SITE_QUERY = groq`{
  "homepageTitle": *[_id == 'homepage'][0].title,
  "settings": *[_id == "settings"][0]{
    metadata,
    siteTitle,
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

export type SiteQuery = Pick<SITE_QUERYResult, 'homepageTitle'> &
	Nullable<{
		context: Nullable<{
			slug: string;
			title: string;
			caseStudies: Nullable<{
				slug: string;
				title: string;
			}>[];
		}>;
		settings: Pick<Settings, 'metadata' | 'siteTitle'>;
	}>;

export const SITEMAP_QUERY = groq`{
  "info": *[_id == 'info'][0],
  "pages": *[_id == "homepage"][0].context->caseStudies[]->{ 
    title,
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
