const fs = require("fs")

fs.readdir(process.argv[2], (err, data) => {
  if (err) throw err
  for (const file of data) {
    if (file.includes(`.${process.argv[3]}`)) console.log(file)
  }
})
