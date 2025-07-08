/* console.log(this)

function outerNormalFunction() {
  console.log(this)
}
const outerArrow = () => {
  console.log(this)
}
const outerFunctionExpression = function () {
  console.log(this)
}

const obj = {
  normalFunction() {
    console.log(this)
  },
  arrow: () => {
    console.log(this)
  },
  functionExpression: function () {
    console.log(this)
  },
  outerNorm: outerNormalFunction,
  outerArr: outerArrow,
  outerFuncExpr: outerFunctionExpression,
}
obj.normalFunction()
obj.arrow()
obj.functionExpression()
obj.outerNorm()
obj.outerArr()
obj.outerFuncExpr()
 */


/* 'use strict'
console.log(this)
function test(){
  console.log(this)
}
test() */


function demo(){
  console.log(this)
}
const test = ()=>{
  console.log(this)
}
demo()
test()