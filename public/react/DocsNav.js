import DocsSearch from './DocsSearch.js'
import usePresidiumVersion from './usePresidiumVersion.js'
import useDocsViewerClassName from './useDocsViewerClassName.js'
import useDocsSearchQuery from './useDocsSearchQuery.js'
import ClassNames from './ClassNames.js'
import usePath from './usePath.js'
import presidiumV1Filenames from '../presidium/v1-filenames.js'
import useIsHamburgerMenuActive from './useIsHamburgerMenuActive.js'

const presidiumV1ClassNames =
  presidiumV1Filenames
  .filter(filename => filename != 'index.js' && filename != 'userAgent.js')
  .map(filename => filename.replace('.js', ''))

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
  const [docsViewerFuncName, setDocsViewerFuncName] = useDocsViewerClassName()
  const [docsSearchQuery] = useDocsSearchQuery()
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
          setDocsViewerFuncName(name)
          setPath(href)
          setIsHamburgerMenuActive(false)
        },
      }, name)
    ])
  }

  const [docsSearchCandidates, setDocsSearchCandidates] = useState(presidiumV1ClassNames)

  const DocsSearchQueryNavItems = ({
    docsSearchQuery, docsSearchCandidates,
  }) => {
    return docsSearchCandidates
    .filter(funcName => (
      funcName.toLowerCase().includes(docsSearchQuery)
    ))
    .map(funcName => (
      CoreDocsNavItem(funcName)
    ))
  }

  return Nav([
    Section([
      DocsSearch(),
    ]),

    docsSearchQuery == '' ? [
      Section([
        presidiumV1ClassNames.map(className => CoreDocsNavItem(className)),
      ]),
    ] : [
      Section([
        DocsSearchQueryNavItems({ docsSearchQuery, docsSearchCandidates }),
      ]),
    ]
  ])
})

export default DocsNav
