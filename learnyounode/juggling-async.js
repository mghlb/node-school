// use http.get()
// collect content provided by each of the 3 urls(first cli argument argv[2,3,4]) and print it to console
// only print the data, one line per url
// must be printed in same order as argv

const http = require("http")
let results = []
let count = 0

function juggleAsync(index) {
  http.get(process.argv[2 + index], res => {
    res.setEncoding("utf8")
    let rawData = ""
    res.on("data", chunk => (rawData += chunk))
    res.on("end", () => {
      try {
        results[index] = rawData
        count++
        if (count === 3) results.forEach(e => console.log(e))
      } catch (e) {
        console.error(e.message)
      }
    })
  })
}

for (let i = 0; i < 3; i++) {
  juggleAsync(i)
}
