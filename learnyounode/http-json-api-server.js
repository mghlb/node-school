const http = require("http")
const url = require("url")

function parseTime(time) {
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds(),
  }
}

function unixTime(time) {
  return {
    unixtime: time.getTime(),
  }
}

http
  .createServer((req, res) => {
    let myURL = url.parse(req.url, true)
    let time = new Date(myURL.query.iso)
    let result

    if (myURL.pathname.includes("parse")) result = parseTime(time)
    else if (myURL.pathname.includes("unix")) result = unixTime(time)

    result ? res.end(JSON.stringify(result)) : res.end()
  })
  .listen(process.argv[2])
