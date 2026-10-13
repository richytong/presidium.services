import useGlobalState from './useGlobalState.js'
import usePresidiumVersion from './usePresidiumVersion.js'
import ReactElementFromMdast from './ReactElementFromMdast.js'
import defaultPresidiumReadme from '../mdast/presidium-v4-readme.js'

function createPresidiumReadmeMdast(presidiumReadmeMdast) {
  const mdastCopy = omit(presidiumReadmeMdast, [])
  mdastCopy.children.splice(0, 1)
  return mdastCopy
}

// readmeContent ReactElement
const initial = ReactElementFromMdast({
  mdast: createPresidiumReadmeMdast(defaultPresidiumReadme)
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
      const readmeContent1 = ReactElementFromMdast({
        mdast: createPresidiumReadmeMdast(readmeMdast),
      })
      setReadmeContent(readmeContent1)
    }, 0)
  }, [presidiumVersion])

  return [readmeContent, setReadmeContent]
}

export default useReadmeContent
