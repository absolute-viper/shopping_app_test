module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{iml,png,js,css,html}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};