import ReactElementFromMdast from './ReactElementFromMdast.js'
import Layout from './Layout.js'
import useMediaQuery from './useMediaQuery.js'
import useReadmeContent from './useReadmeContent.js'

// () -> Home ReactElement
const Home = ReactElement(props => {
  const [mediaQuery] = useMediaQuery('(max-width: 768px)')

  useEffect(function scrollToAnchor() {
    const anchor = new URL(location.href).hash
    if (anchor.length > 0) {
      setTimeout(() => {
        const offset = mediaQuery.matches ? 0 : 0
        const scrollToElement = document.getElementById(anchor.slice(1))
        if (scrollToElement) {
          const desiredScrollY = scrollToElement.offsetTop + offset
          window.scrollTo(0, desiredScrollY)
        }
      }, 500)
    }
  }, [mediaQuery])

  const [readmeContent] = useReadmeContent()
  return Layout(props, [
    Div({ id: 'home' }, [
      readmeContent,
    ])
  ])
})

export default Home
