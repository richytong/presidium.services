import usePath from './usePath.js'

/**
 * @name NavLink
 *
 * @synopsis
 * ```coffeescript [specscript]
 * NavLink(props {
 *   href: string,
 *   id: string,
 *   children: Array<ReactElement>|ReactElement|string,
 * }) -> ReactElement
 * ```
 */
const NavLink = ReactElement(props => {
  const { href, id, children } = props

  const [path, setPath] = usePath()

  let isActive = false
  if (href == '/') {
    if (href == path) {
      isActive = true
    }
  } else if (path.startsWith(href)) {
    isActive = true
  }

  return A({
    id,
    href,
    class: isActive ? 'nav-link active' : 'nav-link',
    onClick(event) {
      event.preventDefault()
      setPath(href)
    },
  }, children)
})

export default NavLink
