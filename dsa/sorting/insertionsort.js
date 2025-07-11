function swap(elem1, elem2, arr) {
  ;[arr[elem1], arr[elem2]] = [arr[elem2], arr[elem1]]
}
function insertionSort(arr) {
  let length = arr.length
  for (let i = 1; i < length; i++) {
    for (let j = i; j > 0; j--) {
      if (arr[j] < arr[j - 1]) {
        swap(j, j - 1, arr)
      }
    }
  }
  return arr
}

const a = [4, 8, 1, 3, 90, 2, 7]
const b = ["BF","Wife","Husband","GF"]
console.log(insertionSort(b))
