import Layout from './Layout.js'
import useBlogPostList from './useBlogPostList.js'
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

  // const [presidiumVersion] = usePresidiumVersion()
  // const [path, setPath] = usePath()
  const [blogPostList, setBlogPostList] = useBlogPostList()

  /*
  useEffect(() => {
    if (path == '/blog') {
      setPath(blogPostList[0].href, { replace: true })
    }
  }, [path, blogPostList])
  */

  useEffect(function scrollToAnchor() {
    const anchor = new URL(location.href).hash
    if (anchor.length > 0) {
      setTimeout(async () => {
        const scrollToElement = document.getElementById(decodeURIComponent(anchor.slice(1)))
        if (scrollToElement) {
          const desiredScrollY = scrollToElement.offsetTop
          window.scrollTo(0, desiredScrollY)
        }
      }, 10)
    }
  }, [])

  return Layout(props, [
    Div({ id: 'blog' }, [
      blogPostList.map(blogPost => MdastBlogPost({
        key: blogPost.href,
        ...blogPost,
      })),
    ]),
  ])
})

export default BlogHome
