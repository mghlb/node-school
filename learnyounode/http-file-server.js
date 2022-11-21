const http = require("http")
const fs = require("fs")

const server = http.createServer((req, res) => {
  let filename = process.argv[3]
  let readstream = fs.createReadStream(filename)

  readstream.on("open", () => readstream.pipe(res))
  readstream.on("error", err => res.end(err))
})

server.listen(process.argv[2])
