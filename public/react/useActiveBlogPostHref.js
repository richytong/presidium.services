import useGlobalState from './useGlobalState.js'

/**
 * @name useActiveBlogPostHref
 *
 * @docs
 * ```coffeescript [specscript]
 * useActiveBlogPostHref() -> [activeBlogPostHref string, setter function]
 * ```
 */
function useActiveBlogPostHref() {
  return useGlobalState('activeBlogPostHref')
}

export default useActiveBlogPostHref
