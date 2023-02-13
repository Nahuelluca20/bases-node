function otraFuncion() {
  seRompe()
}

function seRompe() {
  return 3 + z
}

function seRompeAsincrona(cb) {
  setTimeout(function () {
    try {
      return 3 + z
    }
    catch (err) {
      console.error("Error en mi funcion asincrona")
      cb(err)
    }
  })
}

try {
  seRompeAsincrona(function (){
    console.log("hay error")
  })

} catch (err) {
  console.error("algo se rompio")
  console.error(err.message)
  console.log("pero lo hemos capturado")
}