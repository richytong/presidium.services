import useGlobalState from './useGlobalState.js'
import usePresidiumVersion from './usePresidiumVersion.js'
import defaultFilenames from '../presidium/v3-filenames.js'

function createClassNames(filenames) {
  return filenames.filter(filename =>
    filename != 'index.js'
    && filename != 'userAgent.js'
    && filename != 'Archive.js'
    && filename != 'internal'
    && filename != 'LICENSE'
  ).map(filename => filename.replace('.js', ''))
}

const initial = createClassNames(defaultFilenames)

  /**
   * @name usePresidiumClassNames
   *
   * @docs
   * ```coffeescript [specscript]
   * usePresidiumClassNames() -> [presidiumClassNames Array<string>, setPresidiumClassNames function]
   * ```
   */
function usePresidiumClassNames() {
  const [presidiumVersion, setPresidiumVersion] = usePresidiumVersion()
  const [presidiumClassNames, setPresidiumClassNames] = useGlobalState('presidiumClassNames', initial)

  useEffect(() => {
    setTimeout(async () => {
      const filenames = await import(`../presidium/${presidiumVersion.toLowerCase()}-filenames.js`).then(get('default'))
      const classNames = createClassNames(filenames)
      setPresidiumClassNames(classNames)
    }, 0)
  }, presidiumVersion)

  return [presidiumClassNames, setPresidiumClassNames]
}

export default usePresidiumClassNames
