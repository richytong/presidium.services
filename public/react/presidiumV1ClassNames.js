import presidiumV1Filenames from '../presidium/v1-filenames.js'

const presidiumV1ClassNames =
  presidiumV1Filenames
  .filter(filename =>
    filename != 'index.js'
    && filename != 'userAgent.js'
    && filename != 'Archive.js'
    && filename != 'internal'
  )
  .map(filename => filename.replace('.js', ''))

export default presidiumV1ClassNames
