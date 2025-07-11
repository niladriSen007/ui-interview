function swap(elem1, elem2, arr) {
  [arr[elem1], arr[elem2]] = [arr[elem2], arr[elem1]]
}

function selectionSort(arr) {
  let length = arr.length
  for (let i = 0; i < length; i++) {
    let minIndex = i
    let minelement = arr[i]
    for (let j = i + 1; j < length; j++) {
      if (arr[j] < minelement) {
        minIndex = j
        minelement = arr[j]
      }
    }
    swap(i, minIndex, arr)
  }
  return arr
}

const a = [4, 8, 1, 3, 90, 2, 7]
console.log(selectionSort(a))
