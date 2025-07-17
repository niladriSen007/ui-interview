Array.prototype.myMap = function (callback, thisArg) {
  //Here, this -> the array on which we are calling this myMap method
  if (this == null) {
    throw new TypeError("This cannot be null")
  }

  if (typeof callback !== "function") {
    throw new TypeError("Callback is not a function")
  }

  const actual_array = Object(this)
  const len = parseInt(actual_array?.length) || 0

  let result = Array(len)
  for (let index = 0; index < len; index++) {
    if (actual_array[index]) {
      const val = actual_array[index]
      const mappedVal = callback.call(thisArg, val, index, actual_array)
      result[index] = mappedVal
    }
  }
  return result
}

// Basic usage
const numbers = [1, 2, 3, 4, 5]
const doubled = numbers.myMap((x) => x * 2)
console.log("Doubled:", doubled)
// With index parameter
const withIndex = numbers.myMap((value, index) => `${index}: ${value}`)
console.log("With index:", withIndex)
// With thisArg
const multiplier = {
  factor: 3,
  multiply: function (x) {
    return x * this.factor
  },
}
const tripled = numbers.myMap(function (x) {
  return this.multiply(x)
}, multiplier) 
console.log("Tripled:", tripled)
