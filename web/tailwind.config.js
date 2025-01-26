// eslint-disable-next-line @typescript-eslint/no-require-imports
const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		lineHeight: {
			1.05: '1.05',
			1.1: '1.1',
			1.2: '1.2',
			1.3: '1.3',
			1.4: '1.4'
		},
		extend: {
			zIndex: {
				nav: '100'
			},
			maxWidth: {
				'rag-heading': '25ch',
				'rag-paragraph': '55ch'
			},
			spacing: {
				'available-svh': 'calc(100svh - 60px)',
				'available-dvh': 'calc(100dvh - 60px)'
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
