import useActiveBlogPostHref from './useActiveBlogPostHref.js'
import useGlobalState from './useGlobalState.js'
import usePath from './usePath.js'
import DownArrowSvg from './DownArrowSvg.js'

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
    imageMaxHeight,
  } = metadata

  useEffect(() => {
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'))
    }, 100)
  }, [])

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

  const classes = [
    'blog-post',
    isActive ? 'active' : 'inactive',
  ]

  return Div({
    key: href,
    class: classes.join(' '),
  }, [
    A({
      href: isActive ? backHref : href,
      class: isActive ? 'active' : '',
      onClick(event) {
        event.preventDefault()
        onLinkClick()
        setTimeout(() => {
          window.scrollTo(0, 0)
        }, 300)
      },
    }, [
      H1(title),
      DownArrowSvg(),
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
            ...imageMaxHeight ? { style: { maxHeight: imageMaxHeight } } : {},
          }),
        ]),
      ],
    ] : [
      ...image == null ? [] : [
        Div({ class: 'cover' }, [
          Img({
            src: image,
            alt: image,
            ...imageMaxHeight ? { style: { maxHeight: imageMaxHeight } } : {},
          }),
        ]),
      ],

      Div({ class: 'description' }, [
        H3(description),

        Button({
          class: 'read-more',
          onClick(event) {
            event.preventDefault()
            onLinkClick()
          },
        }, 'Read more'),
      ]),
    ],

    Div({
      class: transition == 'start' ? 'fade-in-out'
        : isActive && transition == 'end' ? 'fade-in-out transition-end'
        : 'fade-in-out',
    }, isActive ? [children] : []),
  ])
})

export default BlogPost
