import useGlobalState from './useGlobalState.js'

const pathname = location.pathname.endsWith('/') && location.pathname != '/'
  ? location.pathname.slice(0, -1)
  : location.pathname

const initial = /\/docs\/\w+/.test(pathname)
  ? pathname.replace('/docs/', '')
  : defaultDocsViewerClassName

// useDocsViewerFuncName(defaultValue string) -> [value string, setter function]
const useDocsViewerFuncName = function () {
  return useGlobalState('docsViewerFuncName', initial)
}

export default useDocsViewerFuncName
