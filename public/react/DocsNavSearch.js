import useDocsSearchQuery from './useDocsSearchQuery.js'
import presidiumV1ClassNames from './presidiumV1ClassNames.js'
import useCronistMap from './useCronistMap.js'
import usePath from './usePath.js'
import useIsHamburgerMenuActive from './useIsHamburgerMenuActive.js'
import useDocsViewerClassName from './useDocsViewerClassName.js'
import DocsNavClassItem from './DocsNavClassItem.js'
import DocsNavClassMethodItem from './DocsNavClassMethodItem.js'
import presidiumClassExludedMethods from './presidiumClassExcludedMethods.js'

/**
 * @name DocsNavSearch
 * 
 * @docs
 * ```coffeescript [specscript]
 * DocsNavSearch() -> ReactElement
 * ```
 */
const DocsNavSearch = ReactElement(() => {
  const [docsSearchQuery] = useDocsSearchQuery()
  const [docsViewerClassName, setDocsViewerClassName] = useDocsViewerClassName()
  const [path, setPath] = usePath()
  const [
    isHamburgerMenuActive, setIsHamburgerMenuActive,
  ] = useIsHamburgerMenuActive()

  const [cronistMap, setCronistMap] = useCronistMap()

  const lowerSearchQuery = docsSearchQuery.toLowerCase()
  const docsSearchCandidates = []
  for (const className of presidiumV1ClassNames) {
    const lowerClassName = className.toLowerCase()

    let candidate = undefined
    if (
      lowerClassName.includes(lowerSearchQuery)
        || lowerSearchQuery.includes(lowerClassName)
    ) {
      candidate = { name: className, methodNames: [] }
    }

    const docsData = cronistMap.get(className) ?? { methods: [] }
    const excludedMethods = presidiumClassExludedMethods.get(className) ?? []
    const availableMethods =
      docsData.methods.filter(methodData =>
        !methodData.name.startsWith('_')
        && !excludedMethods.includes(methodData.name)
      )

    for (const method of availableMethods) {
      const lowerMethodName = method.name.toLowerCase()
      if (
        lowerMethodName.includes(lowerSearchQuery)
          || lowerSearchQuery.includes(lowerMethodName)
      ) {
        if (candidate == null) {
          candidate = { name: className, methodNames: [] }
        }
        candidate.methodNames.push(method.name)
      }
    }

    if (candidate) {
      docsSearchCandidates.push(candidate)
    }

  }

  return Div({ id: 'docs-nav-search' }, [
    docsSearchCandidates.map(candidate => Div({
      key: candidate.name,
      class: 'candidate',
    }, [
      DocsNavClassItem({
        key: candidate.name,
        name: candidate.name,
        setDocsViewerClassName,
        setPath,
        setIsHamburgerMenuActive,
      }),

      candidate.methodNames.map(methodName => Div({
        key: methodName,
        class: 'method',
      }, [
        DocsNavClassMethodItem({
          name: candidate.name,
          method: methodName,
          setIsHamburgerMenuActive,
        }),
      ]))
    ]))
  ])
})

export default DocsNavSearch
