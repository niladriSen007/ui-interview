/* console.log([]+1+2)
console.log(typeof function(){})
console.log(typeof null == typeof undefined)
console.log(""+1+2) */

// Sort an array which has 2 elements inside every index and we need to sort is bases on the 2nd element [["1":2],["2":1],["3":3]]
function sortArray(arr) {
  return arr.sort((a, b) => a[1] - b[1]);
}

/* console.log(sortArray([["1", 2], ["2", 1], ["3", 3]])); */

/* console.log(Number.NEGATIVE_INFINITY)
console.log(Infinity)

console.log('A  &* man &*('.replace(/[^a-zA-Z]/g,'')) */


const obj = {
  a: 1,
  b: 2,
  c: 3,
};

console.log(Object.values(obj))