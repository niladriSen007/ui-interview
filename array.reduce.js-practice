Array.prototype.myReduce = function (callback, initialValue) {
  if (this === null) {
    throw new TypeError("This cannot be null")
  }
  if (typeof callback !== "function") {
    throw new TypeError("Callback must be a function")
  }
  const actual_array = Object(this)
  const length = actual_array.length
  if (length === 0 && !initialValue) {
    throw new Error("This operation can't be performed")
  }

  let accumulator = initialValue ? initialValue : actual_array[0]
  let startIndex = initialValue ? 0 : 1
  for (let index = startIndex; index < length; index++) {
    if (actual_array[index]) {
      accumulator = callback(
        accumulator,
        actual_array[index], 
        index,
        actual_array
      )
    }
  }
  return accumulator
}

const arr = [1, 2, 3, 4, 5]
const res = arr.myReduce((acc, elem) => acc + elem, 0)
console.log(res)
