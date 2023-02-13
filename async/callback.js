function hola(nombre, miCallback) {
  setTimeout(function () {
    console.log("Hola, " + nombre);
    miCallback(nombre);
  }, 1000)
}

function adios(nombre, otroCallback) {
  setTimeout(function () {
    console.log("Adios, " + nombre);
    otroCallback();
  }, 1000)
}

console.log("Iniciando proceso")
hola("Nahuel",function(nombre) {
  adios(nombre, function () {
    console.log("Terminado el proceso");
  })
});