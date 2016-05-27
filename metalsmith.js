var Metalsmith = require('metalsmith');
var markdown = require('metalsmith-markdown');
var layouts = require('metalsmith-layouts');
var assets = require('metalsmith-assets');
var sass = require('metalsmith-sass');
var collections = require('metalsmith-collections');
var filenames = require('metalsmith-filenames');
var prism = require('metalsmith-prism');
var pagination = require('metalsmith-pagination');
var dateFormatter = require('metalsmith-date-formatter');
var path = require('./plugins/path');
var category = require('./plugins/category');

module.exports = Metalsmith(__dirname)
.use(filenames())
.use(collections({
	posts: {
		pattern: '**/*.md',
		sortBy: 'date',
		reverse: true
	}
}))
.use(dateFormatter({
	dates: [
		{
			key: 'date',
			format: 'MMMM Do YYYY'
		}
	]
}))
.use(path())
.use(assets({
	source: './assets',
	destination: './assets' 
}))
.use(markdown({
	tables: true,
	langPrefix: 'language-'
}))
.use(prism())
.use(pagination({
	'collections.posts': {
		perPage: 10,
		layout: 'list.html',
		first: 'list.html',
		path: 'page/:num/index.html',
		pageMetadata: { category: 'page' }
	},
	'collections.baking': {
		perPage: 10,
		layout: 'list.html',
		first: 'list.html',
		path: 'baking/:num/index.html',
		pageMetadata: { category: 'baking' }
	},
	'collections.other': {
		perPage: 10,
		layout: 'list.html',
		first: 'list.html',
		path: 'other/:num/index.html',
		pageMetadata: { category: 'other' }
	},
	'collections.teaching': {
		perPage: 10,
		layout: 'list.html',
		first: 'list.html',
		path: 'teaching/:num/index.html',
		pageMetadata: { category: 'teaching' }
	},
	'collections.tutorials': {
		perPage: 10,
		layout: 'list.html',
		first: 'list.html',
		path: 'tutorials/:num/index.html',
		pageMetadata: { category: 'tutorials' }
	},
	'collections.webDevelopment': {
		perPage: 10,
		layout: 'list.html',
		first: 'list.html',
		path: 'web-development/:num/index.html',
		pageMetadata: { category: 'web-development' }
	},
	'collections.openSource': {
		perPage: 10,
		layout: 'list.html',
		first: 'list.html',
		path: 'open-source/:num/index.html',
		pageMetadata: { category: 'open-source' }
	}
}))
.use(category())
.use(layouts({
	engine: 'ejs',
	partials: 'partials'
}))
.use(sass({
	outputDir: 'assets/css',
	sourceMap: true
}));