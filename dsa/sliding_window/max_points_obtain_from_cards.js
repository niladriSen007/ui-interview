function obtainMaxPoints(arr, k) {
  let lSum = 0,
    rSum = 0,
    maxSum = 0
  for (let i = 0; i < k; i++) {
    lSum += arr[i]
  }
  maxSum = lSum
  rIndex = arr.length - 1
  for (let i = k - 1; i >= 0; i--) {
    lSum -= arr[i]
    rSum += arr[rIndex]
    rIndex--
    maxSum = Math.max(maxSum, lSum + rSum)
  }

  console.log(maxSum)
}

const arr = [6, 2, 3, 4, 7, 2, 1, 7, 1]
obtainMaxPoints(arr, 4)
