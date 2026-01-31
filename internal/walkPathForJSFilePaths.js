require('rubico/global')
const Transducer = require('rubico/Transducer')
const x = require('rubico/x')
const fs = require('fs')

// path string => Array<fs.Dirent>
const readdirWithFileTypes = path => fs.promises.readdir(path, {
  withFileTypes: true,
})

// walkPathForJSFilePaths(path string, options {
//   ignoreDirs?: Array<string>,
// }) -> jsFilePaths Array<string>
const walkPathForJSFilePaths = function (path, options = []) {
  const { ignoreDirs = [] } = options

  return pipe(path, [
    readdirWithFileTypes,
    flatMap(dirent => {
      if (dirent.isDirectory() && !ignoreDirs.includes(dirent.name)) {
        return walkPathForJSFilePaths(`${path}/${dirent.name}`, options)
      }
      if (dirent.name.endsWith('.js')) {
        return [`${path}/${dirent.name}`]
      }
      return []
    }),
  ])
}

module.exports = walkPathForJSFilePaths
