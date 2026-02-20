import useGlobalState from './useGlobalState.js'
import usePresidiumVersion from './usePresidiumVersion.js'
import ReactElementFromMdast from './ReactElementFromMdast.js'
import defaultPresidiumReadme from '../mdast/presidium-v3-readme.js'

// removes the link heading and duplicate logo
defaultPresidiumReadme.children.splice(0, 1)

// readmeContent ReactElement
const initial = ReactElementFromMdast({ mdast: defaultPresidiumReadme })

/**
 * @name useReadmeContent
 *
 * @docs
 * ```coffeescript [specscript]
 * useReadmeContent() -> [readmeContent, setReadmeContent]
 * ```
 */
function useReadmeContent() {
  const [readmeContent, setReadmeContent] = useGlobalState('readmeContent', initial)
  const [presidiumVersion] = usePresidiumVersion()

  useEffect(() => {
    setTimeout(async () => {
      const readmeMdast = await import(`../mdast/presidium-${presidiumVersion.toLowerCase()}-readme.js`)

      // removes the link heading and duplicate logo
      readmeMdast.children.splice(0, 1)

      // readmeContent ReactElement
      const readmeContent1 = ReactElementFromMdast({ mdast: readmeMdast })

      setReadmeContent(readmeContent1)
    }, 0)
  }, [presidiumVersion])

  return [readmeContent, setReadmeContent]
}

export default useReadmeContent
