Function.prototype.myBind = function(context,...params){
  if(typeof this !== "function") throw new TypeError("MyBind must be called into a function")

  context = context !== null ? Object(context) : globalThis

  const func = this;

  return function(...args){
      return func.apply(context,[...params,...args])
  }
}

const obj = { x: 10 };
function add(y, z) { return this.x + y + z; }
const bound = add.myBind(obj, 5);
console.log(bound(7)) // -> 22