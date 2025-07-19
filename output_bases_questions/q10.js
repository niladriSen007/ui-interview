var a = {
  b: "India",
  c: "USA",
}
var b = a
var c = { ...a }
var d = structuredClone(a)
var e = Object.assign(a)
var f = JSON.parse(JSON.stringify(a))
b.c = "UK"
console.log(b.c)
console.log(a.c)


console.log([ 1, 3, 4, [ 5, 7, 13, 5, 5], 33, 13, 22, 13, 32, 44, 71, 137, [237]].flat())