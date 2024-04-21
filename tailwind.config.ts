import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./node_modules/preline/preline.js'
	],

	plugins: [
		require('@tailwindcss/forms'),
		require('preline/plugin')
	],

	theme: {
		extend: {}
	}
};

export default config;