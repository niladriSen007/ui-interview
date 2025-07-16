function func(a) {
  return function chils(b) {
    return function c3(c) {
      console.log(a + b + c)
    }
  }
}

const r1 = func(3)(2)(1)
r1
