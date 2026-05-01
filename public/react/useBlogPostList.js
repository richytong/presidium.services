import useGlobalState from './useGlobalState.js'
import MdastBlogMetadata from './MdastBlogMetadata.js'
import databaseSystemGuideMdast from '../mdast/database-system-guide.js'

function createBlogPostList(mdastList) {
  return mdastList.map(mdast => ({
    mdast,
    metadata: MdastBlogMetadata(mdast),
  })).sort((a, b) => {
    const timeA =
      new Date(a.metadata.dateUpdated ?? a.metadata.datePublished).getTime()
    const timeB =
      new Date(b.metadata.dateUpdated ?? b.metadata.datePublished).getTime()
    return timeB - timeA
  })
}

const initial = createBlogPostList([
  databaseSystemGuideMdast,
])

function useBlogPostList() {
  return useGlobalState('blogPostList', initial)
}

export default useBlogPostList
