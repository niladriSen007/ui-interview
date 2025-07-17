function myPromiseAll(promiseList) {
  const result = Array(promiseList.length)
  let completed = 0
  return new Promise((resolve, reject) => {
    for (let index = 0; index < promiseList?.length; index++) {
      Promise.resolve(promiseList[index])
        ?.then((data) => {
          result[index] = data
          completed += 1

          if (completed === promiseList?.length) {
            resolve(result)
          }
        })
        .catch((error) => {
          reject(error)
        })
    }
  })
}

const successTasks = [
  new Promise((resolve) => setTimeout(() => resolve("Task 1"), 1000)),
  new Promise((resolve,reject) => setTimeout(() => reject("Task 2"), 500)),
  new Promise((resolve) => setTimeout(() => resolve("Task 3"), 200))
]

myPromiseAll(successTasks)
  ?.then((res) => console.log(res))
  ?.catch((err) => console.log(err))
