Function.prototype.myCall = function(context,...args){
  if(typeof this !== "function")  throw new TypeError("myCall must be called on a function");

  context = Object(context) ?? globalThis

  const symbol= Symbol()
  context[symbol] = this;

  const result = context[symbol](...args)
  delete context[symbol]

  return result
}

function printName(greet){
  console.log(`${greet} ${this.name}`)
}

let obj = {
  name :"Niladri"
}

printName.myCall(obj,"Hi")