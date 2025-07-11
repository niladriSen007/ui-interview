Array.prototype.myMap = function (callback, options) {
  if (this === null) {
    throw new Error("This cannot be null")
  }

  if (typeof callback !== "function") {
    throw new Error("Cllback must be a function")
  }

  const actual_array = Object(this)
  const length = actual_array.length

  const result_array = new Array(length)
  for (let index = 0; index < length; index++) {
    if (actual_array[index]) {
      result_array[index] = callback.call(
        options,
        actual_array[index],
        index,
        actual_array
      )
    }
  }
  return result_array
}

const arr = [1, 2, 3, 4, 5]
const output = arr.myMap((elem) => elem ** 2)
console.log(output)

const option = {
  factor : 3,
  multiply(num){
    return num * this.factor
  }
}
const advanced = arr.myMap(function(num){
  return this.multiply(num)
},option)
console.log(advanced)

