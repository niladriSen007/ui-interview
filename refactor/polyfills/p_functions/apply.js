Function.prototype.myApply = function(context,args){
  if(typeof this !== "function") throw new TypeError("myApply must be called on a function")
  if(args !== null && !Array.isArray(args)) throw new TypeError("CreateListFromArrayLike called on non-object")

  context = context ? Object(context) : globalThis;
  const symbol = Symbol()
  context[symbol] = this;

  let result = context[symbol](...args)
  delete context[symbol]

  return result

}

function printName(greet,time){
  console.log(`${greet} ${this.name} ${time}`)
}

let obj = {
  name :"Niladri"
}

printName.myApply(obj,["Hi","good evening"])