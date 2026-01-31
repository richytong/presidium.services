import useGlobalState from './useGlobalState.js'

// useDocsSearchQuery() -> [docsSearchQuery string, setter function]
const useDocsSearchQuery = function () {
  return useGlobalState('docsSearchQuery', '')
}

export default useDocsSearchQuery
