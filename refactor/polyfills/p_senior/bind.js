if(!Function.prototype.myBind){
  Object.defineProperty(Function.prototype,"myBind",{
    value: function(context,...preset){
        if (typeof this !== "function") {
        throw new TypeError("myBind must be called on a function");
      }

      const targetFunc = this;

      context = context === null || context === undefined ? globalThis : Object(context)

      function toBeReturned(...later){
        return targetFunc.apply(context,[...preset,...later])
      }

      return toBeReturned
    },
    writable: true,
    configurable:true
  })
}

const greet= function() {
  console.log(`Hello, ${this.name}!`);
}
const person = {
  name: "Alice",
};

const anotherPerson = {
  name: "Bob"
};

const greetBob = greet.myBind(anotherPerson);

greetBob();