function Example() {
  var y = 1
  if (true) {
    console.log(y) // 1
    var y = 2
  }
  function inner() {
    y++
    console.log(y) // NaN
    console.log(x) // undefined
    var x = 12
    var y = 3
    y++
  }
  inner()
  console.log(y) //2
}
Example()
