const config = require('./config')

/**
 * @name SitemapXml
 *
 * @synopsis
 * ```coffeescript [specscript]
 * SitemapXml() -> xml string
 * ```
 */
function SitemapXml() {
  return `
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${config.pages.map(({ url }) => `
<url>
  <loc>https://presidium.services${url}</loc>
</url>
  `.trim()).join('\n')}
</urlset>
  `.trim()
}

module.exports = SitemapXml
