// See https://kit.svelte.dev/docs/types#app

import type { HomeCaseStudy } from '$lib/sanity/queries';

// for information about these interfaces
declare global {
  namespace App {
    // interface Error {}
    // interface Locals {}
    interface PageData {
      caseStudies: HomeCaseStudy[];
      bio: string;
    }
    // interface Platform {}
  }
}

export {};
