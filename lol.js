const w = window.open() // access the "about:blank" window you've opened
w.document.body.innerHTML = "<h1>You can add HTML something like this</h1>"
// or access other parts to add more JS or CSS
const style = w.document.createElement("link")
link.href = "/path/to.css"
link.rel = "stylesheet"
w.document.head.appendChild(style)
