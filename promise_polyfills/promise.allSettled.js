function myPromiseAllSettled(promises) {
  const result = Array(promises.length)
  let completed = 0
  return new Promise((resolve) => {
    for (let index = 0; index < promises.length; index++) {
      Promise.resolve(promises[index])
        .then((data) => {
          result[index] = {
            status: "fullfilled",
            value: data,
          }
        })
        .catch((error) => {
          result[index] = {
            status: "rejected",
            error,
          }
        })
        .finally(() => {
          completed += 1
          if (completed === promises.length) {
            resolve(result)
          }
        })
    }
  })
}

const successTasks = [
  new Promise((resolve) => setTimeout(() => resolve("Task 1"), 1000)),
  new Promise((resolve, reject) => setTimeout(() => reject("Task 2"), 500)),
  new Promise((resolve) => setTimeout(() => resolve("Task 3"), 200)),
]

myPromiseAllSettled(successTasks)
  ?.then((res) => console.log(res))
  ?.catch((err) => console.log(err))
