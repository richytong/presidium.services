require('rubico/global')
const fs = require('fs')
const nodePath = require('path')

/**
 * @name FileSystem
 *
 * @synopsis
 * ```coffeescript [specscript]
 * new FileSystem(options {
 *   cwd: string,
 * })
 * ```
 */
const FileSystem = function (options) {
  this.cwd = options.cwd
}

// new FileSystem(...).rmrf(path string) -> Promise<>
FileSystem.prototype.rmrf = async function rmrf(path) {
  await fs.promises.rm(`${this.cwd}/${path}`, { recursive: true, force: true })
}

// new FileSystem(...).mkdirp(path string) -> Promise<>
FileSystem.prototype.mkdirp = async function mkdirp(path) {
  await fs.promises.mkdir(`${this.cwd}/${path}`, { recursive: true })
}

// new FileSystem(...).cat(path string) -> content Promise<string>
FileSystem.prototype.cat = async function cat(path) {
  const absPath = path.startsWith(this.cwd) ? path : `${this.cwd}/${path}`
  return fs.promises.readFile(absPath).then(buffer => buffer.toString('utf8'))
}

// new FileSystem(...).writeFile(path string, data string) -> Promise<>
FileSystem.prototype.writeFile = async function writeFile(path, data) {
  const directoryPath = path.split('/').slice(0, -1).join('/')
  await this.mkdirp(directoryPath)
  await fs.promises.writeFile(`${this.cwd}/${path}`, data)
}

// new FileSystem(...).find(path string string, options?: {
//   ignore?: Array<fileName string>,
// }) -> fileNames Promise<Array<string>>
FileSystem.prototype.find = async function ls(path, options = {}) {
  const { ignore = [] } = options

  const location = `${this.cwd}/${path}`

  return pipe(location, [
    curry.arity(2, fs.promises.readdir, __, { withFileTypes: true }),
    flatMap(dirent => {
      if (ignore.includes(dirent.name)) {
        return []
      }
      if (dirent.isDirectory()) {
        return this.find(`${path}/${dirent.name}`, options)
      }
      return [`${location}/${dirent.name}`]
    }),
  ])
}

module.exports = FileSystem
