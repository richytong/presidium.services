import DatePublished from './DatePublished.js'

const MdastBlogMetadata = function (mdast) {
  const yamlChild = mdast.children.find(eq('yaml', get('type')))
  if (yamlChild == null) {
    return {}
  }
  const data = pipe(yamlChild.value.split('\n'), [
    map(keyValue => keyValue.split(': ')),
    Object.fromEntries,
  ])
  console.log(data)
  return {
    title: data.title,
    datePublished: DatePublished(data.date),
    ...data.updated ? { dateUpdated: DatePublished(data.updated) } : {},
    href: data.path,
    author: data.author,
    coverImageUrl: data.coverImageUrl,
    description: data.description,
    image: data.image,
    ...data['image-max-height'] ? { imageMaxHeight: data['image-max-height'] } : {},
  }
  return data
}

export default MdastBlogMetadata
