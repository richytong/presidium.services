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
      removeEventListener('popstate', listener)
    }
  }, [])

  useEffect(() => {
    const listener = document.body.addEventListener('click', event => {
      let anchorTarget = event.target
      while (anchorTarget && anchorTarget.tagName != 'A') {
        anchorTarget = anchorTarget.parentNode
      }
      if (anchorTarget?.tagName == 'A') {
        const anchor = new URL(anchorTarget.href).hash
        const scrollToElement = document.getElementById(anchor.slice(1))
        if (scrollToElement) {
          const desiredScrollY = scrollToElement.offsetTop
          if (window.scrollY == desiredScrollY) {
            event.preventDefault()
          } else if (anchor.length > 0) {
            setTimeout(() => {
              window.scrollTo(0, desiredScrollY)
            }, 10)
          }
        }
      }
    })

    return () => {
      document.body.removeEventListener('click', listener)
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
