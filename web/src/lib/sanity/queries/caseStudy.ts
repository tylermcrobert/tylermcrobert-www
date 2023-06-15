import type { InputValue } from '@portabletext/svelte/ptTypes';
import groq from 'groq';

// TODO: Include mobileWebsite timedSlides tripleImage

const imgWithAspect = groq`{
    "asset": image,
    "preCropAspect": image.asset->.metadata.dimensions.aspectRatio
}`;

const mobileWebsiteMediaProjection = groq`{
  _type,
  "image": asset-> ${imgWithAspect},
  "video": videoFile.asset->url,
}    
`;

const themeProjection = groq`{
  "background": background.hex,
  "frame": frame.hex,
}`;

export const caseStudyQuery = groq`
  *[_type == 'caseStudy' && slug.current == $slug][0]{
    "slug": slug.current,
    title,
    deliverables,
    intro,
    date,
    description,
    modules[]{
      _type == 'textBlock' => {
        ...,
        _type,
      },
      
      _type == 'dynamicImage' => {
        _type,
        "image": ${imgWithAspect},
        aspect,
        span,
      },

      _type == 'website' => {
        _type,
        showFrame,
        "background": ${imgWithAspect},
        theme-> ${themeProjection},
        "media":media[0]${mobileWebsiteMediaProjection},
      },

      _type == 'mobileWebsite' => {
        _type,
        "frames": frames[]${mobileWebsiteMediaProjection},
        theme-> ${themeProjection},
      }
    }
  }
`;

export type CaseStudyQuery = {
  slug: string;
  title: string;
  deliverables: string[];
  intro: string;
  date: string;
  description: PortableText;
  modules: PortfolioModule[];
};

export type PortfolioModule =
  | ModuleWebsite
  | ModuleDynamicImage
  | ModuleTextBlock
  | ModuleMobileWebsite;

/**
 * Website
 */

export type ModuleWebsite = {
  _type: 'website';
  media: WebsiteModuleMedia;
  theme: WebsiteFrameTheme;
  background: ImageWithAspect | null;
  showFrame: boolean | null;
};

/**
 * Dynamic Image
 */

export type ModuleDynamicImage = {
  _type: 'dynamicImage';
  span: 'half' | 'full' | null;
  image: ImageWithAspect;
  aspect: number;
};

/**
 * Dynamic Image
 */

export type ModuleTextBlock = {
  _type: 'textBlock';
  content: PortableText;
};
/**
 * Mobile Website
 */

export type ModuleMobileWebsite = {
  _type: 'mobileWebsite';
  frames: WebsiteModuleMedia[];
  theme: WebsiteFrameTheme;
};

/**
 * Utils
 */

export type WebsiteModuleMedia = { video: string; image: ImageWithAspect };
export type PortableText = InputValue;
export type SanityImage = { _type: 'image' };
export type ImageWithAspect = {
  asset: SanityImage;
  preCropAspect: number;
};

export type WebsiteFrameTheme = { background: string; frame: string };
