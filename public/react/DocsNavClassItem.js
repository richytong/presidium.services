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
 *   setDocsSearchQuery: function,
 * }) -> ReactElement
 * ```
 */
const DocsNavClassItem = ReactElement(props => {
  const {
    name,
    setPath,
    setDocsViewerClassName,
    setIsHamburgerMenuActive,
    setDocsSearchQuery,
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
        setDocsSearchQuery('')
        scrollTo(0, 0)
      },
    }, name)
  ])
})

export default DocsNavClassItem
