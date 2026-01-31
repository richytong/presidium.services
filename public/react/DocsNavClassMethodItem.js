/**
 * @name DocsNavClassMethodItem
 *
 * @docs
 * ```coffeescript [specscript]
 * DocsNavClassMethodItem(props {
 *   name: string,
 *   method: string,
 *   setIsHamburgerMenuActive: function,
 * }) -> ReactElement
 * ```
 */
const DocsNavClassMethodItem = ReactElement(props => {
  const {
    name,
    method,
    setIsHamburgerMenuActive,
  } = props

  const href = `/docs/${name}#${method}`

  return Div({ class: 'docs-nav-item method' }, [
    A({
      href,
      onClick() {
        setIsHamburgerMenuActive(false)
      }
    }, method)
  ])
})

export default DocsNavClassMethodItem
