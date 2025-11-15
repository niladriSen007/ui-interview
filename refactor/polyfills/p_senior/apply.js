if(!Function.prototype.myApply){
  Object.defineProperty(Function.prototype,"myApply",{
    writable:true,
    configurable:true,
    value: function(context,args){
      if(typeof this !== "function"){
         throw new TypeError("myBind must be called on a function");
      }

      const func = this;
      context = context === null || context === undefined ? globalThis : Object(context)

      const unique = Symbol()
      context[unique] = func


      let result ;
      try{
       result = context[unique](...args)
      }
      finally{
        delete context[unique]
      }
      return result
    }
  })
}

const greet= function(greet,time) {
  console.log(`${greet}, ${this.name} ${time}!`);
}
const person = {
  name: "Alice",
};

const anotherPerson = {
  name: "Bob"
};

greet.myApply(anotherPerson,["Hi","Good Evening"]);