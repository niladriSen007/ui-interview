const obj = {
  value: 42,
  normalArrow: () => console.log("Normal arrow ->", this.value),
  normalFunction: function () {
    console.log("Normal function ->", this.value)
  },
  showArrow: function () {
    setTimeout(() => {
      console.log("Arrow ->", this.value)
    }, 1000)
  },
  showNormal: function () {
    setTimeout(function () {
      console.log("Function ->", this.value)
    }, 1000)
  },
}

obj.normalArrow()
obj.normalFunction()
obj.showArrow()
obj.showNormal()



/* 
The Output
Here is what will be logged to the console in order:

Normal arrow -> undefined
Normal function -> 42
Arrow -> 42
Function -> undefined
(Note: The last two lines will appear after a 1-second delay)

Why This Happens: The Rules of this
The entire output is determined by one crucial concept: how the this keyword gets its value.

Traditional function: The value of this is determined by how the function is called. It's dynamic. If you call it as myObject.myFunction(), then this inside myFunction will be myObject. If you call it as a standalone function, this will be the global object (window in a browser) or undefined in strict mode.

Arrow Function =>: An arrow function does not have its own this. Instead, it "inherits" this from its parent scope at the time it is defined. This is called lexical scoping. this is fixed and doesn't change based on how the function is called.

Line-by-Line Breakdown
Let's apply these rules to each function call:

1. obj.normalArrow() -> Normal arrow -> undefined
What it is: An arrow function defined directly on an object.

Why: Because normalArrow is an arrow function, it doesn't get its this from obj. It inherits this from the scope where obj was defined, which is the global scope (window in a browser). The global scope does not have a value property, so this.value is undefined.

2. obj.normalFunction() -> Normal function -> 42
What it is: A traditional function called as a method of obj.

Why: Because normalFunction is a traditional function, its this is determined by how it's called. Since it's called as obj.normalFunction(), this is set to obj. Therefore, this.value correctly resolves to 42.

3. obj.showArrow() -> Arrow -> 42 (after 1 sec)
What it is: A traditional function (showArrow) that contains a setTimeout with an arrow function callback.

Why:

When obj.showArrow() is called, this inside showArrow is obj (following the rule for traditional functions).

The arrow function () => { ... } is defined inside showArrow. It lexically inherits its this from its parent scope, which is showArrow.

Therefore, the arrow function "remembers" that this is obj. When setTimeout executes the callback one second later, it still uses this remembered this, and this.value is 42.

4. obj.showNormal() -> Function -> undefined (after 1 sec)
What it is: A traditional function (showNormal) that contains a setTimeout with a traditional function callback.

Why:

When obj.showNormal() is called, this inside showNormal is obj.

However, the callback function() { ... } is a new, traditional function. When setTimeout executes it later, it's called from the global context, not as a method of obj.

Because it's a traditional function called without a specific object context, its this defaults to the global object (window). Since window.value is undefined, that's what it logs. This is a very common source of bugs in JavaScript. */