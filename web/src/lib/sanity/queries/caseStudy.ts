import type { InputValue } from '@portabletext/svelte/ptTypes';
import groq from 'groq';
import type { SanityImage } from '../types';

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
  *[_type == 'caseStudy' && slug.current == $slug] | order(_updatedAt desc){
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
        theme-> ${themeProjection}, },
     
      _type == 'timedSlides' => {
        _type,
        images,
        seconds,
        theme-> ${themeProjection},
      },

      _type == 'tripleImage' => {
        _type,
        imageRight,
        mainImage,
        secondaryImage1,
        secondaryImage2
      },

      _type == 'emptySpace' => {
        _type,
      }
    }
  }
`;

export type CaseStudyQuery = {
  slug: string;
  title: string | null;
  deliverables: string[] | null;
  intro: string | null;
  date: string | null;
  description: PortableText | null;
  modules: PortfolioModule[] | null;
};

export type PortfolioModule =
  | ModuleWebsite
  | ModuleDynamicImage
  | ModuleTripleImage
  | ModuleTextBlock
  | ModuleMobileWebsite
  | ModuleTimedSlides
  | ModuleEmptySpace;

/**
 * Website
 */

export type ModuleWebsite = {
  _type: 'website';
  media: WebsiteModuleMedia | null;
  theme: WebsiteFrameTheme | null;
  backgroundImg: SanityImage | null;
  showFrame: boolean | null;
};

/**
 * Dynamic Image
 */

export type ModuleDynamicImage = {
  _type: 'dynamicImage';
  span: 'half' | 'full' | null;
  image: SanityImage | null;
  aspect: number | null;
};

/**
 * Text Block
 */

export type ModuleTextBlock = {
  _type: 'textBlock';
  content: PortableText | null;
};

/**
 * Triple Image
 */

export type ModuleTripleImage = {
  _type: 'tripleImage';
  imageRight: boolean | null;
  mainImage: SanityImage | null;
  secondaryImage1: SanityImage | null;
  secondaryImage2: SanityImage | null;
};

/**
 * Mobile Website
 */

export type ModuleMobileWebsite = {
  _type: 'mobileWebsite';
  frames: WebsiteModuleMedia[] | null;
  theme: WebsiteFrameTheme | null;
};

/**
 * Timed Slides
 */

export type ModuleTimedSlides = {
  _type: 'timedSlides';
  images: SanityImage[] | null;
  theme?: WebsiteFrameTheme | null;
  seconds: number | null;
};

/**
 * Timed Slides
 */

export type ModuleEmptySpace = {
  _type: 'emptySpace';
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
