// So long to the orange and the white
function correctText(str) {
  // Two different patterns for precise corrections
  str = str.replace(/\b(The )?University of Texas( at Austin)?\b/gi, "texas university")
  str = str.replace(/\bUT( ?Austin)?\b/gi, "t.u.")
  return str
}

// Recursive function that traverses through the page with special handling for certain nodes
function searchForHorns(el) {
  if (Node.TEXT_NODE === node.nodeType) {
    el.data = correctText(node.data)
  }
  if (Node.ELEMENT_NODE === el.nodeType && el.nodeName != "SCRIPT") {
    for (var x = 0; x < el.childNodes.length; x++) {
      searchForHorns(el.childNodes[x])
    }
  }
}

// BTHO!
document.title = correctText(document.title)
searchForHorns(document.body)