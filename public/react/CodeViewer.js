import inspect from './inspect.js'
import CopyIcon from './CopyIcon.js'
import CopySuccessIcon from './CopySuccessIcon.js'
import copyToClipboard from './copyToClipboard.js'

const codeMirrors = new Map()

// { code } -> codeViewer React.Element
const CodeViewer = ReactElement(({
  code,
  mode = 'javascript',
  theme = 'default',
  lineWrapping = false,
  lineNumbers = false,
}) => {

  /*
  const codeAreaRef = useRef(null)
  useEffect(() => {
    if (!codeMirrors.has(codeAreaRef)) return
    codeMirrors.get(codeAreaRef).getDoc().setValue(code)
  }, [code])
  useEffect(() => {
    const cm = CodeMirror(codeAreaRef.current, {
      value: code,
      mode,
      lineWrapping,
      lineNumbers,
      theme,
      readOnly: 'nocursor',
      // cursorBlinkRate: -1,
    })
    codeMirrors.set(codeAreaRef, cm)
    return () => {
      codeMirrors.delete(codeAreaRef)
    }
  }, [])
  */

  const ref = useRef(null)
  const [hover, setHover] = useState(false)
  const [copySuccess, setCopySuccess] = useState(false)

  useEffect(() => {
    hljs.highlightElement(ref.current)
  }, [])

  return Div({
    class: hover ? 'code-viewer hover' : 'code-viewer',
    onMouseEnter() {
      setHover(true)
    },
    onMouseLeave() {
      setHover(false)
    }
  }, [
    Button({
      class: 'copy-button',
      onClick() {
        copyToClipboard(code)
        setCopySuccess(true)
        setTimeout(() => {
          setCopySuccess(false)
        }, 500)
      },
    }, [copySuccess ? CopySuccessIcon() : CopyIcon()]),
    Code([Pre({ ref }, code)]),
  ])

  // return Div({ class: 'code-viewer' }, [
  // Div({ ref: codeAreaRef }),
  // ])
})

export default CodeViewer
