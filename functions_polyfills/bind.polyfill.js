Object.prototype.myBind = function (targetObject, ...params) {
  if (typeof this !== "function") {
    throw new TypeError("myBind must be called on a function")
  }

  targetObject =
    targetObject !== null || targetObject !== undefined
      ? targetObject
      : globalThis

  const func = this

  return function (...args) {
    return func.apply(targetObject, [...params, ...args])
  }
}

let object1 = {
  name: "Vivek",
  surname: "moradiya",
  printName: function(age, city) {
    return this.name + " " + this.surname + " " + age + " " + city;
  }
};

let object2 = {
  name: "Amy",
  surname: "Patel"
};

let boundFunction = object1.printName.myBind(object2, 22, "Morbi");
console.log(boundFunction()); 