import DocsSearchBar from './DocsSearchBar.js'
import usePresidiumVersion from './usePresidiumVersion.js'
import useDocsViewerClassName from './useDocsViewerClassName.js'
import useDocsSearchQuery from './useDocsSearchQuery.js'
import ClassNames from './ClassNames.js'
import usePath from './usePath.js'
import presidiumV1ClassNames from './presidiumV1ClassNames.js'
import useIsHamburgerMenuActive from './useIsHamburgerMenuActive.js'
import useCronistMap from './useCronistMap.js'
import presidiumClassExcludedMethods from './presidiumClassExcludedMethods.js'
import DocsNavClassItem from './DocsNavClassItem.js'
import DocsNavClassMethodItem from './DocsNavClassMethodItem.js'
import DocsNavSearch from './DocsNavSearch.js'

/**
 * @name DocsNav
 *
 * @synopsis
 * ```coffeescript [specscript]
 * DocsNav() -> ReactElement
 * ```
 */
const DocsNav = ReactElement(props => {
  const [path, setPath] = usePath()
  const [presidiumVersion] = usePresidiumVersion()
  const [docsViewerClassName, setDocsViewerClassName] = useDocsViewerClassName()
  const [docsSearchQuery, setDocsSearchQuery] = useDocsSearchQuery()
  const [cronistMap, setCronistMap] = useCronistMap()
  const [
    isHamburgerMenuActive, setIsHamburgerMenuActive,
  ] = useIsHamburgerMenuActive()

  const CoreDocsNavItem = name => {
    const href = `/docs/${name}`
    return Div({ key: name, class: 'docs-nav-item' }, [
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
  }

  const CoreDocsNavItemMethod = (name, method) => {
    const href = `/docs/${name}#${method}`
    return Div({ key: name, class: 'docs-nav-item method' }, [
      A({
        href,
        onClick() {
          setIsHamburgerMenuActive(false)
        }
      }, method)
    ])
  }

  const docsData = cronistMap.get(docsViewerClassName) ?? { methods: [] }
  const excludedMethods = presidiumClassExcludedMethods.get(docsViewerClassName) ?? []

  return Nav({ id: 'docs-nav' }, [
    Section([
      DocsSearchBar(),
    ]),

    docsSearchQuery == '' ? [
      Section([
        presidiumV1ClassNames.map(className => Div({ key: className }, [
          DocsNavClassItem({
            name: className,
            setDocsViewerClassName,
            setPath,
            setIsHamburgerMenuActive,
            setDocsSearchQuery,
          }),

          className == docsViewerClassName ? [
            docsData.methods.length == 0 ? [] : Div({ class: 'methods' }, [
              ...docsData.methods
              .filter(methodData =>
                  !methodData.name.startsWith('_')
                  && !excludedMethods.includes(methodData.name)
              )
              .map(methodData => DocsNavClassMethodItem({
                key: `${className}-${methodData.name}`,
                name: className,
                method: methodData.name,
                setIsHamburgerMenuActive,
                setDocsSearchQuery,
              }))
            ]),
          ] : [],
        ])),
      ]),
    ] : [
      Section([
        DocsNavSearch()
      ]),
    ]
  ])
})

export default DocsNav
