console.log("first")

setTimeout(() => {
  console.log("set timeout")
}, 0)

console.log("third")

Promise.resolve().then(() => {
  console.log("promise")
})

setImmediate(() => {
  console.log("Inside set immediate")
})

process.nextTick(() => {
  console.log("next tick")
})
