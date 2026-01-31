import Home from './Home.js'
import NotFoundHome from './NotFoundHome.js'

const path = location.pathname.endsWith('/') && location.pathname != '/'
  ? location.pathname.slice(0, -1)
  : location.pathname

/**
 * @name Root
 *
 * @docs
 * ```coffeescript [specscript]
 * Root() -> ReactElement
 * ```
 */
const Root = ReactElement(() => {
  if (path == '/') {
    return Home()
  }
  return NotFoundHome()
})

export default Root
