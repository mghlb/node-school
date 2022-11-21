const http = require("http")
const map = require("through2-map")

let server = http.createServer((req, res) => {
  if (req.method !== "POST") res.end("Need a POST request")
  else {
    req.pipe(map(chunk => chunk.toString().toUpperCase())).pipe(res)
  }
})

server.listen(process.argv[2])
