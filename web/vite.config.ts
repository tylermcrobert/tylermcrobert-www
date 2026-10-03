import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [tailwindcss(), sveltekit()],
	build: {
		rollupOptions: {
			/**
			 * `@sanity/sveltekit` re-exports `SanityStudio` from its package entry,
			 * so importing anything from it drags the entire `sanity` Studio
			 * (~1900 modules of React, @sanity/ui, framer-motion) into the graph.
			 * The Studio lives in ../studio and is never mounted here, so Rollup
			 * tree-shakes it away — but only after parsing it, which is what
			 * exhausted the build's heap. Remove this only if a route renders
			 * `<SanityStudio>`.
			 */
			external: ['sanity']
		}
	}
});
