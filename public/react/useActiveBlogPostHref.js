import useGlobalState from './useGlobalState.js'
import useBlogPostList from './useBlogPostList.js'

const initial = window.location.pathname 

/**
 * @name useActiveBlogPostHref
 *
 * @docs
 * ```coffeescript [specscript]
 * useActiveBlogPostHref() -> [activeBlogPostHref string, setter function]
 * ```
 */
function useActiveBlogPostHref() {
  const [blogPostList, setBlogPostList] = useBlogPostList()
  let initial = undefined
  for (const blogPost of blogPostList) {
    if (blogPost.metadata.href == window.location.pathname) {
      initial = blogPost.metadata.href
      console.log('set initial', initial)
    }
  }
  return useGlobalState('activeBlogPostHref', initial)
}

export default useActiveBlogPostHref
