Array.prototype.myForEach = function(callback,thisArg){
  if (this == null) throw new TypeError("Array.prototype.forEach called on null or undefined");
  if (typeof callback !== "function") throw new TypeError(callback + " is not a function");
  
  const arr = Object(this);
  const len = arr.length ?? 0;

  for(let i=0;i<len;i++){
    if(i in arr){
      callback.call(thisArg,arr[i],i,arr)
    }
  }
}

new Array(1,2,3,4,5).myForEach(elem=>{
  console.log(elem)
})