function myPromiseAny(promises) {
  let errors = Array(promises.length)
  let completed = 0
  return new Promise((resolve, reject) => {
    if (!promises.length) {
      reject(new AggregateError([], "All promises were rejected"))
    }

    for (let index = 0; index < promises.length; index++) {
      Promise.resolve(promises[index])
        .then(resolve)
        .catch((error) => {
          errors[index] = error
          completed += 1

          if (completed === promises.length) {
            reject(new AggregateError(errors, "All promises were rejected"))
          }
        })
    }
  })
}

const errorRaceTasks = [
  new Promise((resolve, reject) => setTimeout(() => reject("Error 1"), 500)),
  new Promise((resolve) => setTimeout(() => resolve("Task 2"), 1000)),
  new Promise((resolve, reject) => setTimeout(() => reject("Error 2"), 200)),
]

const failureTasks = [
  new Promise((_, reject) => setTimeout(() => reject("Error Task 1"), 1000)),
  new Promise((_, reject) => setTimeout(() => reject("Error Task 2"), 500)),
]

myPromiseAny(failureTasks)
  ?.then((res) => console.log(res))
  ?.catch((err) => console.log(err))
