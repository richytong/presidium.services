import CodeViewer from './CodeViewer.js'

const isArray = Array.isArray

// string => string
const anchorHashFormat = value => value
  .replace(/\[([\w ]+)\]/g, '$1-')
  .replace(/ /g, '-')
  .toLowerCase()

// mdast object => anchorHash string
const anchorHashFromMdast = function (mdast) {
  const t = get(mdast, 'children[0].type')
  switch (t) {
    case 'linkReference':
      const firstChar = get(mdast, 'children[0].label'),
        rest = get(mdast, 'children[1].value')
      return `[${firstChar}]${rest}`
    case 'text':
      return get(mdast, 'children[0].value')
    default:
      return ''
  }
}

// mdast -> ReactElement
const ReactElementFromMdastRecurse = function (mdast) {
  return isArray(mdast.children)
    ? mdast.children.map(mdast => ReactElementFromMdast({ mdast }))
    : mdast.value
}

// code string => [code string, imports Object<string=>string>]
const codeSpliceImports = function (code) {
  const imports = {}
  let result = code
  while (result.includes('import')) {
    result = result.replace(/import (\w+) from '([\s\S]+?)'\n/, (
      match, name, url,
    ) => {
      imports[name] = url
      return ''
    })
  }
  result = result.trimStart()
  return [result, imports]
}

// ReactElementFromMdast({
//   mdast: {
//     type: string,
//     value: string,
//     children: Array<this>,
//   },
// )) -> ReactElement
const ReactElementFromMdast = ReactElement(props => {
  const { mdast } = props

  switch (mdast.type) {
    case 'yaml': {
      return []
    }
      
    case 'definition':
      switch (mdast.identifier) {
        case 'meta':
        case 'author':
        case 'published':
        case 'updated':
          return P({ className: 'blog-metadata' }, mdast.title)
        default:
          return Span()
      }

    case 'root':
      return Article(ReactElementFromMdastRecurse(mdast))

    case 'heading':
      switch (mdast.depth) {
        case 1: {
          const anchorHash = pipe(mdast, [
            anchorHashFromMdast,
            anchorHashFormat,
          ])
          return A({
            class: 'anchor-hash',
            href: `#${anchorHash}`,
            style: { display: 'flex', placeItems: 'center' },
          }, [H1({ id: anchorHash }, ReactElementFromMdastRecurse(mdast))])
        }
        case 2: {
          const anchorHash = pipe(mdast, [
            anchorHashFromMdast,
            anchorHashFormat,
          ])
          return A({
            class: 'anchor-hash',
            href: `#${anchorHash}`,
            style: { display: 'flex', placeItems: 'center' },
          }, [H2({ id: anchorHash }, ReactElementFromMdastRecurse(mdast))])
        }
        case 3: {
          const anchorHash = pipe(mdast, [
            anchorHashFromMdast,
            anchorHashFormat,
          ])
          return A({
            class: 'anchor-hash',
            href: `#${anchorHash}`,
            style: { display: 'flex', placeItems: 'center' },
          }, [H3({ id: anchorHash }, ReactElementFromMdastRecurse(mdast))])
        }
        case 4: {
          const anchorHash = pipe(mdast, [
            anchorHashFromMdast,
            anchorHashFormat,
          ])
          return A({
            class: 'anchor-hash',
            href: `#${anchorHash}`,
            style: { display: 'flex', placeItems: 'center' },
          }, [H4({ id: anchorHash }, ReactElementFromMdastRecurse(mdast))])
        }
        case 5: {
          const anchorHash = pipe(mdast, [
            anchorHashFromMdast,
            anchorHashFormat,
          ])
          return A({
            class: 'anchor-hash',
            href: `#${anchorHash}`,
            style: { display: 'flex', placeItems: 'center' },
          }, [H5({ id: anchorHash }, ReactElementFromMdastRecurse(mdast))])
        }
        default:
          return H6(ReactElementFromMdastRecurse(mdast))
      }

    case 'emphasis':
      return I(ReactElementFromMdastRecurse(mdast))

    case 'image':
      return Div({ class: 'image' }, [
        Img({ src: mdast.url, alt: mdast.alt })
      ])

    case 'blockquote':
      return Blockquote(ReactElementFromMdastRecurse(mdast))

    case 'paragraph':
      return P(ReactElementFromMdastRecurse(mdast))

    case 'strong':
      return B(ReactElementFromMdastRecurse(mdast))

    case 'text':
      return Span(ReactElementFromMdastRecurse(mdast))

    case 'list':
      return mdast.ordered
        ? Ol({ start: mdast.start ?? 1 }, ReactElementFromMdastRecurse(mdast))
        : Ul(ReactElementFromMdastRecurse(mdast))

    case 'listItem':
      return Li(ReactElementFromMdastRecurse(mdast))

    case 'inlineCode':
      return Code(ReactElementFromMdastRecurse(mdast))

    case 'code':
      switch (mdast.meta) {
        case '[specscript]':
          return Div([
            // H3('Syntax'),
            CodeViewer({
              code: mdast.value,
              mode: mdast.lang,
              theme: 'coffeescript',
            }),
          ])
        case '[node]':
          return CodeViewer({
            code: mdast.value,
            mode: mdast.lang,
            theme: 'rubico',
          })
        default:
          return CodeViewer({
            code: mdast.value,
            mode: mdast.meta == null ? mdast.lang : mdast.meta.slice(1, -1),
            theme: 'default',
          })
      }

    case 'link':
      return A({ href: mdast.url }, ReactElementFromMdastRecurse(mdast))

    case 'linkReference':
      return Span([Span('['), ReactElementFromMdastRecurse(mdast), Span(']')])

    case 'html':
      if (mdast.value == '<br />' || mdast.value == '<br>') {
        return Br()
      }
      return Span('')

    default:
      return Span(mdast.value)
  }
})

export default ReactElementFromMdast
