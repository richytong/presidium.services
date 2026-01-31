import useGlobalState from './useGlobalState.js'

// useDocsViewerFuncName(defaultValue string) -> [value string, setter function]
const useDocsViewerFuncName = function (defaultValue) {
  return useGlobalState('docsViewerFuncName', defaultDocsViewerClassName)
}

export default useDocsViewerFuncName
