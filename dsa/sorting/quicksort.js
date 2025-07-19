function quickSort(arr) {
  if (arr.length <= 1) return arr
  let pivot = arr[arr.length - 1]
  let left = [],
    right = []
  for (let item = 0; item < arr.length - 1; item++) {
    arr[item] < pivot ? left.push(arr[item]) : right?.push(arr[item])
  }
  return [...quickSort(left), pivot, ...quickSort(right)]
}

const a = [3, 1, 9, 7, 4, 51, 2]
console.log(quickSort(a))
