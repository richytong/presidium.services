require('rubico/global')
const Transducer = require('rubico/Transducer')
const sharp = require('sharp')
const fs = require('fs')
const path = require('path')

const pathResolve = path.resolve

const callProp = (property, ...args) => value => value[property](...args)

// (path string, widthPx number)
const renameWithWidth = (path, widthPx) => {
  const basePathParts = path.split('.'),
    extension = basePathParts.pop()
  return `${basePathParts.join('.')}-w${widthPx}.${extension}`
}

/**
 * @name resizeWidth
 *
 * @synopsis
 * ```coffeescript [specscript]
 * resizeWidth(filePath string, widthPx number)
 * ```
 */
const resizeWidth = function (filePath, widthPx) {
  const renamedFilePath = renameWithWidth(filePath, widthPx)
  return pipe(filePath, [
    fs.createReadStream,
    transform(Transducer.passthrough, Buffer.from('')),
    sharp,
    callProp('resize', widthPx),
    transform(Transducer.passthrough, fs.createWriteStream(renamedFilePath)),
    tap(thunkify(console.log, 'resizing', filePath, '->', renamedFilePath)),
  ])
}

module.exports = resizeWidth
