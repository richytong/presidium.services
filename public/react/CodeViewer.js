import inspect from './inspect.js'

const codeMirrors = new Map()

// { code } -> codeViewer React.Element
const CodeViewer = ReactElement(({
  code,
  mode = 'javascript',
  theme = 'default',
  lineWrapping = true,
  lineNumbers = false,
}) => {
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

  return Div({ class: 'code-viewer' }, [
    Div({ ref: codeAreaRef }),
  ])
})

export default CodeViewer
