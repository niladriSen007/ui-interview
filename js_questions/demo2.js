/* function func(){
  let count=0
  return function(){
    count++
    console.log(count)
  }
}

const ret = func()
ret() */

/* console.log(x)
var x = 12 */

/* const a = [1,2,3,4,5,6,3];
const b = [3,4,3,8,9,0];
const set_a = [...new Set(a)]
const set_b = [...new Set(b)]



function checkIfExists(elem){
  return set_b?.indexOf(elem)!== -1 ? true : false
}
const res = set_a?.filter(elem => checkIfExists(elem))
console.log(res) */

const ip = ["timCook", "elonMusk", "viratKholi"]

// expected output
/* ['Tim Cook', 'Elon Musk', 'Virat Kholi'] */

function capitalize(s) {
  let result = []
  for (let elem of s) {
    if (elem != elem?.toLowerCase()) {
      let id = s.indexOf(elem)
      let val = s.slice(id)?.join("")
      let op = s.slice(0, id)?.join("")
      result.push(`${op?.charAt(0)?.toUpperCase()}${op.slice(1)} ${val}`)
      return result
    }
  }
}

const [a, b, c] = ip.map((item) => capitalize(item?.split("")))
console.log([].concat(a, b, c))
