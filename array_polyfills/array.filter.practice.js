Array.prototype.myFilter = function (callback, options) {
  if (this === null) {
    throw new Error("This can not be null")
  }
  if (typeof callback !== "function") {
    throw new Error("Callback must be a function")
  }

  const actual_array = Object(this)
  let result_array = []
  for (let index = 0; index < this.length; index++) {
    if (actual_array[index]) {
      if (callback.call(options, actual_array[index], index, actual_array)) {
        result_array.push(actual_array[index])
      }
    }
  }

  return result_array
}

const age = [11, 45, 23, 17, 98]
const filtered = age.myFilter((age) => age > 18)
console.log(filtered)

const option = {
  factor: 3,
  multiply(num) {
    return this.factor * num
  },
}
const advancedFilter = age.myFilter(function (elem) {
  return this.multiply(elem) > 45
}, option)
console.log(advancedFilter)
