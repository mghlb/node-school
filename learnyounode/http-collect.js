const http = require("http")

http.get(process.argv[2], res => {
  res.setEncoding("utf8")
  let rawData = ""
  res.on("data", chunk => (rawData += chunk))
  res.on("end", () => {
    try {
      console.log(rawData.length)
      console.log(rawData)
    } catch (e) {
      console.error(e.message)
    }
  })
})
