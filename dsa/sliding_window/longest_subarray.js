function longest_subarray_of_sum_k(arr, targetSum) {
  let left = 0,
    right = 0,
    maxLength = -Infinity,
    maxSum = -Infinity,
    sum = 0
  while (right < arr?.length) {
    sum += arr[right]
    while (sum > targetSum) {
      sum -= arr[left]
      left += 1
    }
    if (sum <= targetSum) {
      maxLength = Math.max(maxLength, right - left + 1)
      maxSum = Math.max(maxSum, sum)
    }
    right += 1
  }
  return { maxLength, maxSum }
}

const a = [1, 4, 2, 10, 10]
let ans = longest_subarray_of_sum_k(a, 14)
console.log(ans)
