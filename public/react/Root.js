import Home from './Home.js'
import DocsHome from './DocsHome.js'
import NotFoundHome from './NotFoundHome.js'
import usePath from './usePath.js'

/**
 * @name Root
 *
 * @docs
 * ```coffeescript [specscript]
 * Root() -> ReactElement
 * ```
 */
const Root = ReactElement(() => {
  const [path, setPath] = usePath()

  useEffect(() => {
    const listener = addEventListener('popstate', () => {
      setPath(document.location.pathname, { ignoreHistory: true })
    })

    return () => {
      removeEventListener(listener)
    }
  }, [])

  if (path == '/') {
    return Home()
  }
  if (path == '/docs' || path.startsWith('/docs')) {
    return DocsHome()
  }
  return NotFoundHome()
})

export default Root
