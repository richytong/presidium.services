import Layout from './Layout.js'
import DocsNav from './DocsNav.js'
import usePresidiumVersion from './usePresidiumVersion.js'
import useDocsViewerClassName from './useDocsViewerClassName.js'
import ReactElementFromMdast from './ReactElementFromMdast.js'
import usePath from './usePath.js'
import presidiumClassExludedMethods from './presidiumClassExcludedMethods.js'

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
  const [cronistMap, setCronistMap] = useState(new Map())
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
    if (presidiumVersion != cronistMap.version) {
      import(`../cronist/presidium-${presidiumVersion.toLowerCase()}.js`).then(module => {
        const cronistPresidium = module.default
        const cronistMap1 = new Map()
        cronistPresidium.forEach(item => {
          cronistMap1.set(item.name, item)
        })
        cronistMap1.version = presidiumVersion
        setCronistMap(cronistMap1)
      })
    }
  }, [presidiumVersion])

  const docsData = cronistMap.get(docsViewerClassName)
  const excludedMethods = presidiumClassExludedMethods.get(docsViewerClassName) ?? []

  return Layout(props, [
    Div({ id: 'docs' }, [
      Div({ class: 'sidebar' }, [
        DocsNav(props),
      ]),

      cronistMap.size == 0 ? []
      : cronistMap.has(docsViewerClassName) ? [
        Div({ class: 'viewer' }, [
          A({ href: path }, H1(docsViewerClassName)),

          Div({ class: 'docs' }, [
            ReactElementFromMdast({ mdast: docsData.mdast.docs }),

            docsData.methods
            .filter(methodData =>
              methodData.name != '_readyPromise'
                && !methodData.name.startsWith('_awsRequest')
                && !excludedMethods.includes(methodData.name)
            )
            .map(methodData => Div({
              id: `${methodData.name}`,
              class: 'method',
              key: methodData.name,
            }, [
              A({ href: `${path}#${methodData.name}` }, H1(methodData.name)),
              ReactElementFromMdast({
                mdast: methodData.mdast.docs,
              })
            ])),
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
