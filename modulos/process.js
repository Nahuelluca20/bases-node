process.on("beforeExit", () => {
  console.log("El proceso va a terminar")
})

process.on("exit", () => {
  console.log("El proceso acabo")
  setTimeout(() => {
    console.log("Esto nunca se va a ver")
  },0)
})

setTimeout(() => {
  console.log("Esto se va a ver")
},0)


process.on("uncaughtException", (err, origen) => {
  console.error("Se nos ha olvidado capturar un error")
  console.error(err)
})

// funcionQUENOEXISTE()