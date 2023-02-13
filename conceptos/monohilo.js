i = 0;

setInterval(() => {
  console.log(i);
  i++;

  //if (i === 5) {
  //  console.log("Forzamos error")
  //  var a = 3 + z;
  //}
}, 1000);

//esta instrucción se ejecuta 
//antes que la primera que es el setInterval
console.log("segunda instrucción")