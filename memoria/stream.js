const fs = require("fs")
const stream = require("stream")
const util = require("util")

let data = ""

let readableStream = fs.createReadStream(__dirname + "/input.txt")

readableStream.setEncoding("utf-8")
// readableStream.on("data", (chunk) => {
//   data += chunk
// })

// readableStream.on("end", () => {
//   console.log(data)
// })

// process.stdout.write("hola")
// process.stdout.write("que")
// process.stdout.write("tal")

const Transform = stream.Transform

const upperCaseTransform = new Transform({
  transform(chunk, encoding, callback) {
    this.push(chunk.toString().toUpperCase());
    callback();
  }
});


readableStream
  .pipe(upperCaseTransform)
  .pipe(process.stdout);

