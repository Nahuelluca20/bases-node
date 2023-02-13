const { exec, spawn } = require("child_process")

// exec("dir", (err, stdout, sterr) => {
//   if (err) {
//     console.error(err)
//     return false
//   }

//   console.log(stdout)
// })

let proceso = spawn('cmd', ['/c', 'dir'])

console.log(proceso.pid)
console.log(proceso.connected)

proceso.stdout.on('data', (dato) => {
  console.log(dato.toString())
})

proceso.on("exit", () => {
  console.log("el proceso termino")
})