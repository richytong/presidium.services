require('rubico/global')
const Transducer = require('rubico/Transducer')
const Readable = require('presidium/Readable')
const sharp = require('sharp')
const fs = require('fs')
const path = require('path')

/**
 * @name createFavicon
 *
 * @synopsis
 * ```coffeescript [specscript]
 * createFavicon(filePath string, size number)
 * ```
 */
const createFavicon = function (filePath, size) {
  const faviconFilepath = `${__dirname}/../public/assets/favicon-${size}x${size}.png`
  return pipe(filePath, [
    fs.createReadStream,
    Readable.Buffer,
    buffer => sharp(buffer).png().resize(size),
    transform(Transducer.passthrough, fs.createWriteStream(faviconFilepath)),
    tap(thunkify(console.log, 'Creating favicon', faviconFilepath)),
  ])
}

module.exports = createFavicon
