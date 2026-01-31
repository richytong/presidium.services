const ScriptTag = require('./lib/ScriptTag')
const StylesheetTag = require('./lib/StylesheetTag')

module.exports = {
  domain: 'presidium.services',

  scripts: [
    ScriptTag('https://cdn.jsdelivr.net/npm/rubico@2.7.7/dist/rubico.min.js', {
      crossorigin: true,
    }),
    ScriptTag('https://unpkg.com/react@18.3.0/umd/react.production.min.js', {
      crossorigin: true,
    }),
    ScriptTag('https://unpkg.com/react-dom@18.3.0/umd/react-dom.production.min.js', {
      crossorigin: true,
    }),
    ScriptTag('https://unpkg.com/arche@0.3.11/index.js', {
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
    StylesheetTag('/global.css'),
    StylesheetTag('/vendor/codemirror/styles.css'),
    StylesheetTag('/vendor/codemirror/theme/rubico.css'),
    StylesheetTag('/vendor/codemirror/theme/coffeescript.css'),
  ],

  publicDir: 'public',

  pages: [
    {
      title: 'Presidium',
      description: 'A library for creating web services',
      url: '/',
      filepath: '/index.html',
    },
  ],
}
