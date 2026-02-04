import ReactElementFromMdast from './ReactElementFromMdast.js'
import Layout from './Layout.js'
import readmeMdast from '../mdast/presidium-v1-readme.js'

// removes the link heading and duplicate logo
readmeMdast.children.splice(0, 1)

// readmeContent ReactElement
const readmeContent = ReactElementFromMdast({ mdast: readmeMdast })

// () -> Home ReactElement
const Home = ReactElement(props => {
  return Layout(props, [
    Div({ id: 'home' }, [
      readmeContent,
    ])
  ])
})

export default Home
