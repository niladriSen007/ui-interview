//Asked in Amazon -- doubt ache
var a = 10;
x()
y()
z() 

function x(){
 var a = 20;
 console.log(this.a)
}
function y(){
  console.log(this.a)
}
const z = () => {
  console.log(this.a)
}