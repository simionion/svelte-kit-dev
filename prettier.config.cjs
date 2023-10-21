module.exports = {
	useTabs: true,
	singleQuote: true,
	trailingComma: 'all',
	singleAttributePerLine: true,
	arrowParens: 'avoid',
	semi: true,
	printWidth: 120,
	plugins: ['prettier-plugin-svelte', 'prettier-plugin-organize-imports', 'prettier-plugin-tailwindcss'],
	organizeImportsSkipDestructiveCodeActions: true,
	overrides: [{ files: '*.svelte', options: { parser: 'svelte' } }],
};
