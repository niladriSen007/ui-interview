Array.prototype.myFlatten = function () {
  const arr = Object(this)
  let result = []
  return arr.reduce((acc, item) => {
    return acc.concat(Array.isArray(item) ? item?.myFlatten() : item)
  }, [])

  /* function flat(iterable) {
    for (let item of iterable) {
      Array.isArray(item) ? flat(item) : result.push(item)
    }
  }
  flat(arr)

  return result */
}

const arr = [0, 1, 2, [3, 4], [5, 6], [1, 2, 3, [4, [5, [6, [7]]]]]]
console.log(arr.myFlatten())
