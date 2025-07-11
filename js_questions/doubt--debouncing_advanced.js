const button = document.querySelector("#btn")

function debounced(
  callback,
  delay,
  options = { leading: false, trailing: true }
) {
  if (typeof callback !== "function") {
    throw new TypeError("Callback must be a function")
  }

  if (options?.leading === false && options?.trailing === false)
    return () => null

  let timer
  let context = this
  return function (...args) {
    let isLeadingInvoked = false
    if (options?.leading && !timer) {
      callback.apply(context, args)
      isLeadingInvoked = true
      timer = setTimeout(() => {
        timer = null
      }, delay)
    }

    clearTimeout(timer)
    timer = setTimeout(() => {
      if (options?.trailing) {
        callback.apply(context, args)
      }
      timer = null
    }, delay)
  }
}

const func = debounced(
  function (value) {
    console.log(value)
  },
  2000,
  { leading: true, trailing: true }
)

/* func("A") */
/* func("B")
func("C")
setTimeout(() => func("D"), 2000)
setTimeout(() => func("E"), 2500)
setTimeout(() => func("F"), 3000)
setTimeout(() => func("G"), 3500) */

function click() {
  debugger
  console.log("Add to cart")
}

button.addEventListener(
  "click",
  debounced(click, 2000, { leading: true, trailing: false })
)
