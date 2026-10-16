import inspect from "./inspect.js"
import CopyIcon from "./CopyIcon.js"
import CopySuccessIcon from "./CopySuccessIcon.js"
import copyToClipboard from "./copyToClipboard.js"

const codeMirrors = new Map()

// { code } -> codeViewer React.Element
const CodeViewer = ReactElement(({
  code,
  mode = "javascript",
  theme = "default",
  lineWrapping = false,
  lineNumbers = false,
}) => {

  const [hover, setHover] = useState(false)
  const [copySuccess, setCopySuccess] = useState(false)

  return Div({
    class: hover ? "code-viewer hover" : "code-viewer",
    class: [
      "code-viewer",
      ...hover ? ["hover"] : [],
      ...code.includes("\n") ? [] : ["single-line"],
    ].join(" "),
    onMouseEnter() {
      setHover(true)
    },
    onMouseLeave() {
      setHover(false)
    },
  }, [
    Button({
      class: "copy-button",
      onClick() {
        copyToClipboard(code)
        setCopySuccess(true)
        setTimeout(() => {
          setCopySuccess(false)
        }, 500)
      },
    }, [copySuccess ? CopySuccessIcon() : CopyIcon()]),
    mode == "javascript"
      ? Code([Pre(ArcheHighlight.parseJavaScript(code))])
      : Code([Pre(code)]),
  ])
})

export default CodeViewer
