function mergeSort(arr) {
  let length = arr.length
  if (length <= 1) return arr
  let mid = Math.floor(length / 2)
  let left = mergeSort(arr.slice(0, mid))
  let right = mergeSort(arr.slice(mid))
  return merge(left, right)
}

function merge(left, right) {
  let result = []
  let i = 0,
    j = 0
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i++])
    } else {
      result.push(right[j++])
    }
  }

  // We are spreading because if one part of the array has been pushed to the result
  // then other part will remain un pushed so we are pushing the other part by using the spread operator
  return [...result, ...left.slice(i), ...right.slice(j)]
}

const a = [3, 1, 9, 7, 4, 51, 2]
console.log(mergeSort(a))
