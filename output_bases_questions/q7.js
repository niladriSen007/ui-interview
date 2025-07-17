// frequently asked - doubt
const arr = [1, 2, 3, 4, 5]
for (var i = 0; i < arr.length; i++) {
  ;(function (i) {
    setTimeout(function () {
      console.log(i)
    }, 1000)
  })(i) // Pass `i` as an argument to the IIFE
}
