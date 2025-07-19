var a = 12
function a() {
  console.log("first")
}
console.log(a)

/* 💡 Key Concepts:
Function declarations and var variables are hoisted to the top of their scope (here, the global scope).
Function declarations are hoisted before var declarations.
The var declaration (but not its assignment) is hoisted.
Later assignments overwrite earlier declarations. */

/* First, the function a is hoisted and declared.
Then var a is hoisted, but since a is already defined as a function, this var a; doesn’t change it.
Then the assignment a = 12 overwrites the function with the number 12. */
