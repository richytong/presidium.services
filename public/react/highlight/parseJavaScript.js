function parseJavaScript(text) {
  const parsedElements = []

  let index = 0
  let term = ""

  while (index < text.length) {
    let c = text[index]
    if (c === " " || c === "\n") {
      if (term == "//") {
        while (c !== "\n") {
          term += c
          index += 1
          c = text[index]
        }
        term += c
        index += 1
        parsedElements.push(Span({ class: "comment" }, term))
        term = ""
      } else if (term == "/*") {
        let c0 = c
        term += c
        index += 1
        c = text[index]
        while (c0 !== "*" && c !== "/") {
          c0 = c
          term += c
          index += 1
          c = text[index]
        }
        term += c
        parsedElements.push(Span({ class: "comment" }, term))
        term = ""
        index += 1
      } else if (term == "require") {
        parsedElements.push(Span({ class: "require-keyword" }, term))
        term = ""
        index += 1
      } else if (term == "const" || term == "let" || term == "var" || term == "import") {
        parsedElements.push(Span({ class: "keyword" }, term))
        term = ""
        index += 1
      } else if (/^\d+$/.test(term)) {
        parsedElements.push(Span({ class: "number" }, term))
        term = ""
        index += 1
      } // TODO
      else {
        parsedElements.push(term)
      }
    } else {
      term += c
      index += 1
    }
  }

  if (term.length > 0) {
    parsedElements.push(term)
  }

  return parsedElements
}

export default parseJavaScript
