function myPromiseRace(promises) {
  let result = Array(promises.length)
  return new Promise((resolve, reject) => {
    for (let index = 0; index < promises.length; index++) {
      Promise.resolve(promises[index])?.then(resolve).catch(reject)
    }
  })
}

const successTasks = [
  new Promise((resolve) => setTimeout(() => resolve("Task 1"), 1000)),
  new Promise((resolve, reject) => setTimeout(() => reject("Task 2"), 500)),
  new Promise((resolve) => setTimeout(() => resolve("Task 3"), 600)),
]

  const errorRaceTasks = [
    new Promise((resolve, reject) => setTimeout(() => reject('Error 1'), 500)),
    new Promise((resolve) => setTimeout(() => resolve('Task 2'), 1000)),
    new Promise((resolve, reject) => setTimeout(() => reject('Error 2'), 200))
  ];

myPromiseRace(errorRaceTasks)
  ?.then((res) => console.log(res))
  ?.catch((err) => console.log(err))
