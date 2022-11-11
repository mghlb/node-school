const fs = require("fs")

const contents = fs.readFileSync(process.argv[2], "utf-8").split("\n")

console.log(contents.length - 1)
