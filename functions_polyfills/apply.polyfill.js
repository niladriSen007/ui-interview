Object.prototype.myApply = function (targetObject, ...params) {
  if (typeof this !== "function") {
    throw new TypeError("This must be a function")
  }

  targetObject =
    targetObject === null || targetObject === undefined
      ? globalThis
      : Object(targetObject)

  const uniqueSymbol = Symbol()
  targetObject[uniqueSymbol] = this
  const res = targetObject[uniqueSymbol](...params)
  delete targetObject[uniqueSymbol]
  return res
}

const obj1 = {
  name: "Niladri",
  age: 18,
  isAdult: function () {
    return this?.age > 18
  },
}
const obj2 = {
  name: "Azad",
  age: 14,
}
console.log(obj1.isAdult.myApply(obj2, [obj2.age]))


