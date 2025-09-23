Function.prototype.my_apply = function (context, args) {
  const ctx =
    context === null || context === undefined ? globalThis : Object(context)
  //create an unique symbol/key
  const fnSymbol = Symbol()

  //attaching the function to the context
  ctx[fnSymbol] = this

  const res = ctx[fnSymbol](...args)

  //deleting the reference
  delete ctx[fnSymbol]

  return res
}

const obj1 = {
  name: "Niladri",
}
function printName(greeting, message) {
  console.log(`${greeting} ${this.name}, ${message}`)
}

printName.my_apply(obj1, ["Hello", "How are you?"]) 
