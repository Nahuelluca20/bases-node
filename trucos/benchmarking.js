let suma = 0
console.time("bucle")

for (let i = 0; i < 1000000000; i++) {
  suma += 1;
}

console.timeEnd("bucle")

console.time("bucle2")
let suma2 = 0
for (let i = 0; i < 10000000; i++) {
  suma += 1;
}

console.timeEnd("bucle2")