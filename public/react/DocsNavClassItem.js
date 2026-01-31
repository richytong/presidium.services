/**
 * @name DocsNavClassItem
 *
 * @docs
 * ```coffeescript [specscript]
 * DocsNavClassItem(props {
 *   name: string
 *   setDocsViewerClassName: function,
 *   setPath: function,
 *   setIsHamburgerMenuActive: function,
 * }) -> ReactElement
 * ```
 */
const DocsNavClassItem = ReactElement(props => {
  const {
    name,
    setPath,
    setDocsViewerClassName,
    setIsHamburgerMenuActive,
  } = props
  const href = `/docs/${name}`
  return Div({ class: 'docs-nav-item' }, [
    A({
      href,
      onClick(event) {
        event.preventDefault()
        setDocsViewerClassName(name)
        setPath(href)
        setIsHamburgerMenuActive(false)
        scrollTo(0, 0)
      },
    }, name)
  ])
})

export default DocsNavClassItem
