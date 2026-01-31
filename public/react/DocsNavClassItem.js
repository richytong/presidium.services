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
  const { name, setDocsViewerClassName } = props
  const href = `/docs/${name}`
  return Div({ class: 'docs-nav-item' }, [
    A({
      href,
      onClick(event) {
        event.preventDefault()
        setDocsViewerClassName(name)
        setPath(href)
        setIsHamburgerMenuActive(false)
      },
    }, name)
  ])
})

export default DocsNavClassItem
