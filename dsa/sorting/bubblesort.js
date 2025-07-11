function swap(elem1, elem2, arr) {
  [arr[elem1], arr[elem2]] = [arr[elem2], arr[elem1]]
}
function bubbleSort(arr) {
  let length = arr.length
  for (let i = 0; i < length - 1; i++) {
    for (let j = 0; j < length - i - 1; j++) {
      if (arr[j + 1] < arr[j]) {
        swap(j, j + 1, arr)
      }
    }
  }
  return arr;
}

const a = [4,8,1,3,90,2,7];
console.log(bubbleSort(a))