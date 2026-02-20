import useGlobalState from './useGlobalState.js'
import usePresidiumVersion from './usePresidiumVersion.js'
import ReactElementFromMdast from './ReactElementFromMdast.js'
import defaultPresidiumReadme from '../mdast/presidium-v3-readme.js'

function createPresidiumReadmeContent(presidiumReadmeMdast) {
  const mdastCopy = omit(presidiumReadmeMdast, [])
  mdastCopy.children.splice(0, 1)
  const readmeContent = ReactElementFromMdast({ mdast: mdastCopy })
  return readmeContent
}

// readmeContent ReactElement
const initial = ReactElementFromMdast({
  mdast: createPresidiumReadmeContent(defaultPresidiumReadme)
})

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
      const readmeMdast = await import(`../mdast/presidium-${presidiumVersion.toLowerCase()}-readme.js`).then(get('default'))
      const readmeContent1 = createPresidiumReadmeContent(readmeMdast)
      setReadmeContent(readmeContent1)
    }, 0)
  }, [presidiumVersion])

  return [readmeContent, setReadmeContent]
}

export default useReadmeContent
