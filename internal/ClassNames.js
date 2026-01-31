// ClassNames() -> names Array<string>
const ClassNames = function (lib) {
  const result = []
  for (const name in lib) {
    if (typeof lib[name] == 'function' || typeof lib[name] == 'object') {
      result.push(name)
      const fn = lib[name]
      for (const subName in fn) {
        if (typeof subName == 'function') {
          result.push(`${name}.${subName}`)
        }
      }
    }
  }
  return result
}

module.exports = ClassNames
