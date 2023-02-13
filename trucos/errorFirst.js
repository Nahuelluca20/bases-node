
function asincrona(callback) {
  setTimeout(() => {
    try {
      let a = 3 + z
      callback(null, a)
    } catch (error) {
      callback(error)
    }
  }, 1000)
}

asincrona((err, dato) => {
  if (err) {
    console.error("tenemos un error")
    console.error(err)
    // throw err;
    return false
  }

  console.log("todo ha ido bien")
})