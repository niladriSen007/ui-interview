function debounced_function(callback, delay) {
  let timer
  return function (...args) {
    /*  console.log(this) */ // global object
    const context = this
    clearTimeout(timer)
    timer = setTimeout(() => {
      callback.apply(context, args)
    }, delay)
  }
}
const func = debounced_function((message) => {
  console.log(message)
}, 3000)

func("Hii")
