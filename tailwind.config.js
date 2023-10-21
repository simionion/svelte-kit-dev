/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}', 'node_modules/preline/dist/*.js'],
	darkMode: 'media',
	theme: {
		extend: {
			fontFamily: {
				sans: ['Helvetica', 'Arial', 'sans-serif'],
			},
		},
	},
	plugins: [require('preline/plugin')],
};
