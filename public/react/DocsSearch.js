import useDocsSearchQuery from './useDocsSearchQuery.js'

// DocsSearch(props {}) -> ReactElement
const DocsSearch = ReactElement(props => {
  const [docsSearchQuery, setDocsSearchQuery] = useDocsSearchQuery()
  return Div({ id: 'docs-search' }, [
    Input({
      type: 'text',
      value: docsSearchQuery,
      placeholder: 'Search',
      onChange(event) {
        setDocsSearchQuery(event.target.value)
      },
    }),
  ])
})

export default DocsSearch
