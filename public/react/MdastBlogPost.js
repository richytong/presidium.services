import ReactElementFromMdast from './ReactElementFromMdast.js'
import MdastBlogMetadata from './MdastBlogMetadata.js'
import BlogPost from './BlogPost.js'

/**
 * @name MdastBlogPost
 *
 * @synopsis
 * ```coffeescript [specscript]
 * MdastBlogPost(props {
 *   mdast: object,
 * })
 * ```
 */
const MdastBlogPost = ReactElement(props => {
  const { mdast } = props
  return BlogPost(props, [
    ReactElementFromMdast({ mdast }),
  ])
})

export default MdastBlogPost
