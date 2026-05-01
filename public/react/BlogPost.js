import useActiveBlogPostHref from './useActiveBlogPostHref.js'
import useGlobalState from './useGlobalState.js'
import usePath from './usePath.js'

/**
 * @name BlogPost
 *
 * @synopsis
 * ```coffeescript [specscript]
 * BlogPost(props => {
 *   metadata: {
 *     title: string,
 *     author: string,
 *     dateUpdated: string,
 *     datePublished: string,
 *     href: string,
 *     description: string,
 *   },
 *   goto: function,
 *   backHref?: string,
 * }, children Array) -> ReactElement
 * ```
 */
const BlogPost = ReactElement(props => {
  const {
    metadata,
    goto,
    backHref = '/blog',
    children,
  } = props

  const {
    title,
    author,
    dateUpdated,
    datePublished,
    href,
    description,
    image,
  } = metadata

  const [activeBlogPostHref, setActiveBlogPostHref] = useActiveBlogPostHref()
  const [path, setPath] = usePath()

  const isActive = path == href

  const [transition, setTransition] =
    useGlobalState('BlogPost:transition', 'none')

  useEffect(() => {
    if (isActive) {
      setTransition('start')
      setTimeout(() => {
        setTransition('end')
      }, 360)
    }
  }, [isActive])

  const onLinkClick = () => {
    if (isActive) {
      setPath(backHref)
      setActiveBlogPostHref(null)
      setTransition('none')
    } else {
      setActiveBlogPostHref(href)
      setPath(href)
    }
  }

  return Div({
    key: href,
    class: (
      activeBlogPostHref == null ? 'blog-post inactive'
      : isActive ? 'blog-post active'
      : 'blog-post inactive'
    ),
  }, [
    A({
      href: isActive ? backHref : href,
      class: isActive ? 'active' : '',
      onClick(event) {
        event.preventDefault()
        onLinkClick()
      },
    }, [
      H1(title),
    ]),

    dateUpdated ? [
      P(`Updated ${dateUpdated} by ${author}`),
    ] : [
      P(`${datePublished} by ${author}`),
    ],

    isActive ? [
      ...image == null ? [] : [
        Div({ class: 'cover' }, [
          Img({
            src: image,
            alt: image,
          }),
        ]),
      ],
    ] : [
      ...image == null ? [] : [
        Div({ class: 'cover' }, [
          Img({
            src: image,
            alt: image,
          }),
        ]),
      ],

      H3(description),

      Button({
        class: 'read-more',
        onClick(event) {
          event.preventDefault()
          onLinkClick()
        },
      }, 'Read more'),
    ],

    Div({
      class: transition == 'start' ? 'fade-in-out'
        : isActive && transition == 'end' ? 'fade-in-out transition-end'
        : 'fade-in-out',
    }, isActive ? [children] : []),
  ])
})

export default BlogPost
