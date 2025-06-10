Array.prototype.myReduce = function (callback, initialValue) {
  if (typeof callback !== "function")
    throw new Error(`${callback} is not a function`)
  if (this === null) {
    throw new TypeError("This cannot be null")
  }
  let accumulator = initialValue ? initialValue : this[0]
  const startIndex = initialValue ? 0 : 1
  if (!initialValue && this.length === 0) {
    throw new TypeError("Empty array with no initial value")
  }

  const actual_obj = Object(this)
  for (let i = startIndex; i < actual_obj?.length; i++) {
    accumulator = callback(accumulator, actual_obj[i], i, actual_obj)
  }
  return accumulator
}

let arr = [1, 2, 3, 4, 5, 6]
let res = arr.myReduce((acc, curr) => acc + curr)
console.log(res)
