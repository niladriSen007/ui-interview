for (var i = 0; i < 10; i++) {
  setTimeout(function () {
    console.log(i) // 10
  }, 10)
}

// The output will be 10 because the value of i is 10 when the setTimeout function is called

for (var x = 0; x < 10; x++) {
  ;(function (new_x) {
    setTimeout(() => {
      console.log(new_x)
    }, 10)
  })(x)
}
