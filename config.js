const ScriptTag = require('./lib/ScriptTag')
const StylesheetTag = require('./lib/StylesheetTag')
const ClassNames = require('./internal/ClassNames')
const presidium = require('../presidium')

module.exports = {
  domain: 'presidium.services',

  scripts: [
    ScriptTag('https://cdn.jsdelivr.net/npm/rubico@2.7.7/dist/rubico.min.js'),
    ScriptTag('https://cdn.jsdelivr.net/npm/react@18.3.0/umd/react.production.min.js'),
    ScriptTag('https://cdn.jsdelivr.net/npm/react-dom@18.3.0/umd/react-dom.production.min.js'),
    ScriptTag('https://cdn.jsdelivr.net/npm/arche@0.3.11/index.js'),
    ScriptTag('https://cdn.jsdelivr.net/npm/arche-highlight@0.6.2/ArcheHighlight.js'),
    ScriptTag('/global.js'),
  ],

  stylesheets: [
    StylesheetTag('https://fonts.googleapis.com'),
    StylesheetTag('/index.css'),
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
      description: 'Database System Guide with Presidium DiskSortedHashTable and DiskHashTable',
      url: '/blog/database-system-guide',
      filepath: '/blog/database-system-guide',
    },

    {
      title: 'Blue-Green Deployments with Presidium and Docker | Presidium',
      description: 'Reliably deploy with zero downtime with blue-green deployments with Presidium and Docker',
      url: '/blog/blue-green-deployments-with-presidium-and-docker',
      filepath: '/blog/blue-green-deployments-with-presidium-and-docker',
    },
  ],
}
