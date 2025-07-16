Array.prototype.flatten = function () {
  const result = []
  if (!this) {
    throw new TypeError("Context my=ust be defined")
  }
  const arr = Object(this)

  function processFlatten(toBeFlattened) {
    for (let elem of toBeFlattened) {
      if (Array.isArray(elem)) {
        processFlatten(elem)
      } else {
        result.push(elem)
      }
    }
  }

  processFlatten(arr)

  return result
}

const arr = [0, 1, 2, [3, 4], [5, 6], [1, 2, 3, [4, [5, [6, [7]]]]]]
console.log(arr.flatten())
