async function hola(nombre) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("Hola, " + nombre)
      resolve(nombre);
    }, 1500)
  })
}

async function hablar(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("bla bla bla")
      resolve(nombre)
      // res("hay un error")
    }, 1000)
  })
}

async function adios(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("Adios, " + nombre);
      resolve();
    }, 1000)
  })
}

async function main() {
  let nombre = await hola("Nahuel")
  await hablar()
  await hablar()
  await hablar()
  await adios(nombre)
}
console.log("Empezando proceso")
main()
console.log("Terminando proceso")