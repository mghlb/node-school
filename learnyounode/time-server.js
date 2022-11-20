// listen to tcp connections on port provided by argv[2]
// for each connection write date & time in format: "YYYY-MM-DD hh:mm" + a new line
// after sending the string, close connection
const date = new Date()
const net = require("net")

let dateObj = {
  year: date.getFullYear(),
  month: date.getMonth() + 1,
  day: date.getDate(),
  hour: date.getHours(),
  minute: date.getMinutes(),
}

let fmtDate = `${dateObj.year}-${dateObj.month}-${dateObj.day} ${dateObj.hour}:${dateObj.minute}`

const server = net.createServer(socket => {
  socket.end(fmtDate + "\n")
})

server.listen(process.argv[2])
