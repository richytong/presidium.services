import ReactElementFromMdast from './ReactElementFromMdast.js'
import Layout from './Layout.js'
import useReadmeContent from './useReadmeContent.js'

// () -> Home ReactElement
const Home = ReactElement(props => {
  const [readmeContent] = useReadmeContent()
  console.log(readmeContent)
  return Layout(props, [
    Div({ id: 'home' }, [
      readmeContent,
    ])
  ])
})

export default Home
