// See https://kit.svelte.dev/docs/types#app

import type { IndexQuery } from '$lib/sanity/queries';

// for information about these interfaces
declare global {
  namespace App {
    // interface Error {}
    interface Locals {
      index: IndexQuery;
      isPreview: boolean;
    }
    interface PageData {
      index: IndexQuery;
      bio: string;
    }
    // interface Platform {}
  }
}

export {};
