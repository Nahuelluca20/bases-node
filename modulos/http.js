const http = require("http")

http.createServer(router).listen(3001)

function router(req, res) {
  console.log("nueva petición")
  console.log(req.url)

  switch (req.url) {
    case ("/hola"):
      let saludo = hola()
      res.write(saludo)
      res.end()
      break;
    default:
      res.write("no se lo que quieres")
      res.end()
  }

  // res.writeHead(201, {
  //   "Content-type": "text/plain"
  // })
  // res.write("ya se usar http")

  // res.end()
}

console.log("Escuchando en el puerto 3001")

function hola() {
  return "hola que tal"
}