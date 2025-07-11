Array.prototype.myEvery = function (callback) {
  if (this === null) {
    throw new TypeError("This cannot be null")
  }
  if (typeof callback !== "function") {
    throw new TypeError("Callback must be a function")
  }
  const actual_array = Object(this)
  const length = actual_array.length
  let result
  for (let index = 0; index < length; index++) {
    if (!callback(actual_array[index], index, actual_array)) {
      return false
    }
  }
  return true
}

const arr = [1, 2, 3, 4, 5]
const result = arr.myEvery((elem) => elem > 0)
console.log(result)
