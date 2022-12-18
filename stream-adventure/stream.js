const fs = require("fs")
const { stdout } = require("process")

fs.createReadStream(process.argv[2]).pipe(stdout)
