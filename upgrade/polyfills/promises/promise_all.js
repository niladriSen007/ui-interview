export default function my_promise_all(iterable) {
  return new Promise((resolve, reject) => {
    let results = new Array(iterable?.length)
    if (!iterable || !iterable?.length) {
      resolve(results)
      return
    }
    let count = 0
    iterable?.forEach(async (element, index) => {
      try {
        const res = await element
        results[index] = res
        count += 1

        if (count === iterable?.length) {
          resolve(results)
          return
        }
      } catch (error) {
        reject(error)
      }
    })
  })
}

const p0 = Promise.resolve(3);
const p1 = 42;
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('foo');
  }, 100);
});

const res = await my_promise_all([p0, p1, p2]);
console.log(res)