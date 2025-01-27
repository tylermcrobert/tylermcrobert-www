// eslint-disable-next-line @typescript-eslint/no-require-imports
const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			backgroundColor: {
				'image-preload': '#f5f5f5'
			},
			zIndex: {
				nav: '20',
				'project-page': '10',
				'preview-overlay': '30'
			}
		}
	},
	plugins: [
		plugin(({ addVariant }) => {
			addVariant('not-last', '&:not(:last-child)');
			addVariant('not-first', '&:not(:first-child)');
		})
	],
	future: {
		hoverOnlyWhenSupported: true
	}
};
