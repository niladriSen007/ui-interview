let obj = {
  name: "Nil",
  age: 25,
}

/* console.log(Object.hasOwn(obj, "name")) */
let obj2 = obj
Object.seal(obj2)
obj2.height = 4.5 // Not added
obj2.name = "Raj" // Name changes
/* console.log(obj2) */
delete obj2.age // can't be deleted

Object.freeze(obj2)
obj2.name = "jjkhgjhk"
/* console.log(obj2) */

let arr = [1,2,3,4,5]
let slice = arr.slice(0,3)
slice[0] = 18
console.log(arr)



var a= 12
function func(){
  let a = 17
  console.log(a)
}
func()
console.log(a)