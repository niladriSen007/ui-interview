Array.prototype.my_reduce = function (callback, initialValue) {
  if (typeof callback !== "function") {
    throw new TypeError("Callback is not of type function")
  }

  if (!Array.isArray(this)) {
    throw new TypeError("Iterator is not iterable")
  }

  let context = Object(this)
  let accumulator = initialValue || context[0]
  let startIndex = initialValue ? 0 : 1
  if (context?.length === 0 && !initialValue) {
    throw new TypeError("Reduce of empty array with no initial value")
  }

  for (let index = startIndex; index < context?.length; index++) {
    if (context[index]) {
      accumulator = callback(accumulator, context[index], index, context)
    }
  }

  return accumulator
}

console.log([1, 2, 3, 4, 5]?.my_reduce((acc, item) => acc * item, 0))
