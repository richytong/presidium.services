import Layout from './Layout.js'
import DocsNav from './DocsNav.js'
import usePresidiumVersion from './usePresidiumVersion.js'
import useDocsViewerClassName from './useDocsViewerClassName.js'
import ReactElementFromMdast from './ReactElementFromMdast.js'
import usePath from './usePath.js'

/**
 * @name DocsHome
 *
 * @synopsis
 * ```coffeescript [specscript]
 * DocsHome() -> ReactElement
 * ```
 */
const DocsHome = ReactElement(props => {

  const [presidiumVersion] = usePresidiumVersion()
  const [mdastMap, setMdastMap] = useState(new Map())
  const [docsViewerClassName, setDocsViewerClassName] = useDocsViewerClassName('')
  const [path, setPath] = usePath()

  useEffect(function updatePathToDefaultViewerFunc() {
    if (path == '/docs') {
      setPath(`/docs/${defaultDocsViewerClassName}`, { replace: true })
    }
  }, [path])

  useEffect(function updateDocsViewerFuncNameFromPath() {
    let funcName = path.replace('/docs/', '')
    setDocsViewerClassName(funcName)
  }, [path])

  useEffect(function updateMdastMap() {
    if (presidiumVersion != mdastMap.version) {
      import(`../cronist/presidium-${presidiumVersion.toLowerCase()}.js`).then(module => {
        const cronistPresidium = module.default
        const newMdastMap = new Map()
        cronistPresidium.forEach(item => {
          newMdastMap.set(item.name, item.mdast)
        })
        newMdastMap.version = presidiumVersion
        setMdastMap(newMdastMap)
      })
    }
  }, [presidiumVersion])

  const mdastMapHasFuncName = mdastMap.has(docsViewerClassName)
  const docsViewerMdast = mdastMap.get(docsViewerClassName)

  return Layout(props, [
    Div({ id: 'docs' }, [
      Div({ class: 'sidebar' }, [
        DocsNav(props),
      ]),

      mdastMap.size == 0 ? []
      : mdastMap.has(docsViewerClassName) ? [
        Div({ class: 'viewer' }, [
          A({
            href: path,
          }, H1(docsViewerClassName)),

          Div({ class: 'docs' }, [
            ReactElementFromMdast({ mdast: docsViewerMdast.docs })
          ]),

        ]),
      ]
      : [
        Div({ class: 'viewer' }, [
          A({
            href: path,
          }, H1(docsViewerClassName)),

          P(`Not supported in Presidium ${presidiumVersion}`),
        ]),
      ],
    ]),
  ])
})

export default DocsHome
