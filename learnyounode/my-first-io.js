const fs = require("fs")

const content = fs.readFileSync(process.argv[2], "utf-8").split("\n")

console.log(content.length - 1)
