function calculateLps(pattern) {
  let len = 0,
    i = 1
  let arr = Array(pattern.length).fill(0)
  while (i < pattern.length) {
    if (pattern[i] === pattern[len]) {
      len++
      arr[i] = len
      i++
    } else {
      if (len !== 0) {
        len = arr[len - 1]
      } else {
        arr[i] = 0
        i++
      }
    }
  }
  return arr
}

function kmpAlgo(text, pattern) {
  const lps = calculateLps(pattern)
  let i = 0,
    j = 0
  while (i < text.length) {
    if (pattern[j] === text[i]) {
      i++
      j++
    }
    if (j === pattern.length) return i - j
    else if (i < text.length && pattern[j] !== text[i]) {
      j !== 0 ? (j = lps[j - 1]) : i++
    }
  }
}

const text = "I love my India"
const pattern = "India"
console.log(kmpAlgo(text, pattern))
