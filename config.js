const ScriptTag = require('./lib/ScriptTag')
const StylesheetTag = require('./lib/StylesheetTag')
const ClassNames = require('./internal/ClassNames')
const presidium = require('../presidium')

module.exports = {
  domain: 'presidium.services',

  scripts: [
    ScriptTag('https://cdn.jsdelivr.net/npm/rubico@2.7.7/dist/rubico.min.js', {
      crossorigin: true,
    }),
    ScriptTag('https://cdn.jsdelivr.net/npm/react@18.3.0/umd/react.production.min.js', {
      crossorigin: true,
    }),
    ScriptTag('https://cdn.jsdelivr.net/npm/react-dom@18.3.0/umd/react-dom.production.min.js', {
      crossorigin: true,
    }),
    ScriptTag('https://cdn.jsdelivr.net/npm/arche@0.3.11/index.js', {
      crossorigin: true,
    }),
    ScriptTag('/global.js'),

    ScriptTag('/vendor/codemirror/index.js'),
    ScriptTag('/vendor/codemirror/syntax/javascript.js', { async: true }),
    ScriptTag('/vendor/codemirror/syntax/coffeescript.js', { async: true }),
    ScriptTag('/vendor/codemirror/syntax/htmlmixed.js', { async: true }),
    ScriptTag('/vendor/codemirror/syntax/xml.js', { async: true }),
    ScriptTag('/vendor/codemirror/syntax/css.js', { async: true }),
  ],

  stylesheets: [
    StylesheetTag('https://fonts.googleapis.com'),
    StylesheetTag('/index.css'),
    StylesheetTag('/vendor/codemirror/styles.css'),
    StylesheetTag('/vendor/codemirror/theme/rubico.css'),
    StylesheetTag('/vendor/codemirror/theme/coffeescript.css'),
  ],

  publicDir: 'public',

  pages: [
    {
      title: 'Presidium',
      description: 'Official website of Presidium',
      url: '/',
      filepath: '/index.html',
    },
    {
      title: 'Presidium Documentation',
      description: 'Presidium Documentation',
      url: '/docs',
      filepath: '/docs/index.html',
    },

    ...ClassNames(presidium).map(className => ({
      title: `${className} | Presidium Docs`,
      description: `Documentation for Presidium ${className}`,
      url: `/docs/${className}`,
      filepath: `/docs/${className}`,
    })),

    {
      title: 'Presidium Blog',
      description: 'Presidium Blog',
      url: '/blog',
      filepath: '/blog/index.html',
    },

    {
      title: 'Database System Guide | Presidium',
      description: 'Presidium Blog',
      url: '/blog/database-system-guide',
      filepath: '/blog/database-system-guide',
    },
  ],
}
