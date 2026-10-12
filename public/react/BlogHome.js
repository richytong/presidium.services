import Layout from './Layout.js'
import useBlogPostList from './useBlogPostList.js'
import useActiveBlogPostHref from './useActiveBlogPostHref.js'
import MdastBlogPost from './MdastBlogPost.js'

/**
 * @name BlogHome
 *
 * @synopsis
 * ```coffeescript [specscript]
 * BlogHome(props object) -> ReactElement
 * ```
 */
const BlogHome = ReactElement(props => {

  const [blogPostList, setBlogPostList] = useBlogPostList()
  const [activeBlogPostHref, setActiveBlogPostHref] = useActiveBlogPostHref()

  useEffect(function scrollToAnchor() {
    const anchor = new URL(location.href).hash
    if (anchor.length > 0) {
      setTimeout(async () => {
        const scrollToElement = document.getElementById(decodeURIComponent(anchor.slice(1)))
        if (scrollToElement) {
          const desiredScrollY = scrollToElement.offsetTop
          window.scrollTo(0, desiredScrollY)
        }
      }, 500)
    }
  }, [])

  const activeBlogPostIndex =
    blogPostList.findIndex(({ metadata }) => metadata.href == activeBlogPostHref)

  if (activeBlogPostIndex > -1) {
    const activeBlogPost = MdastBlogPost(blogPostList[activeBlogPostIndex])
    const otherBlogPosts =
      blogPostList
      .filter((_, i) => i != activeBlogPostIndex)
      .map(blogPostProps => MdastBlogPost(blogPostProps))

    return Layout(props, [
      Div({ id: 'blog' }, [
        activeBlogPost,
        otherBlogPosts,
      ]),
    ])
  }

  return Layout(props, [
    Div({ id: 'blog' }, [
      blogPostList.map(blogPost => MdastBlogPost({
        key: blogPost.metadata.href,
        ...blogPost,
      }))
    ]),
  ])
})

export default BlogHome
