const fs = require('fs')

function leer(ruta, cb) {
  fs.readFile(ruta, (err, data) => {
    cb(data.toString())
  })
}

function escribir(ruta, contenido, cb) {
  fs.writeFile(ruta, contenido, (err,) => {
    if (err) {
      console.error("No he podido escribir", err)
    } else {
      console.log("se ha escrito correctamente")
    }
  })
}

function borrar(ruta, cb) {
  fs.unlink(ruta, cb)
}

escribir(__dirname + "/archivo1.txt", "soy un archivo nuevo", console.log)
leer(__dirname + "/archivo.txt", console.log)
borrar(__dirname + "/archivo1.txt", console.log)