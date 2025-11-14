Array.prototype.myFilter=function(callback,thisArg){
  if(this===null) throw new TypeError("Iterator is not iterable")
  if(typeof callback!=="function") throw new TypeError("Callback is not a function")

  const arr = Object(this)
  const length = arr?.length ?? 0;

  const result=[]

  for(let i=0;i<length;i++){
    if(i in arr){
      if(callback.call(thisArg,arr[i],i,arr)){
        result.push(arr[i])
      }
    }
  }

  return result;
}

console.log([1,2,3,4,5].myFilter(elem=>elem>3))