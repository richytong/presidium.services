import Layout from './Layout.js'

// () -> NotFound ReactElement
const NotFound = ReactElement(props => {
  return Layout(props, [
    H1('Not Found')
  ])
})

export default NotFound
