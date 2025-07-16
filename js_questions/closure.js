function func() {
  let count = 0
  return function () {
    count++
    console.log(count)
  }
}

const res = func()
res()
res()
res()
const r = func()
r()