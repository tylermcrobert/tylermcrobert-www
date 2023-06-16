import type { InputValue } from '@portabletext/svelte/ptTypes';
import groq from 'groq';
import type { SanityImage } from '../types';

// TODO: Include mobileWebsite timedSlides tripleImage

const websiteMedia = groq`{
  _type,
  "image": { ... },
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
        image,
        aspect,
        span,
      },

      _type == 'website' => {
        _type,
        showFrame,
        backgroundImg,
        theme-> ${themeProjection},
        "media":media[0]${websiteMedia},
      },

      _type == 'mobileWebsite' => {
        _type,
        "frames": frames[]${websiteMedia},
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
  backgroundImg: SanityImage | null;
  showFrame: boolean | null;
};

/**
 * Dynamic Image
 */

export type ModuleDynamicImage = {
  _type: 'dynamicImage';
  span: 'half' | 'full' | null;
  image: SanityImage;
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
  theme: WebsiteFrameTheme | null;
};

/**
 * Utils
 */

export type WebsiteModuleMedia = {
  video: string | null;
  image: SanityImage | null;
};

export type PortableText = InputValue;
export type WebsiteFrameTheme = { background: string; frame: string };
