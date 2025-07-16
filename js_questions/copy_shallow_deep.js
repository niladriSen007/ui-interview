// shallow copy
/* const obj = {
  name: "Niladri",
  details: {
    age: 18,
  },
} */
/* const obj2 = obj */
/* const obj3 = { ...obj } */
/* obj2.name = "Azad" */
/* obj3.name = "Vivek"
obj3.details.age = 19
console.log(obj) */

// deep copy
const obj = {
  name: "Niladri",
  details: {
    age: 25,
  },
}
const obj_deep = structuredClone(obj)
obj_deep.details.age = 19
console.log(obj)
