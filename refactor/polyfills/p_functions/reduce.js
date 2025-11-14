Array.prototype.myReduce = function(callback,initialValue){  
  if(this===null) throw new TypeError("Iterator is not iterable")
  if(typeof callback!=="function") throw new TypeError("Callback is not a function")

  const arr = Object(this)
  const len = arr.length ?? 0;

  let startIndex = initialValue === null | undefined ? 1 : 0;
  let accumulator = initialValue === null | undefined ? arr[0] : initialValue
  

  for(let i=startIndex;i<arr.length;i++){
    if(i in arr){
      accumulator = callback(accumulator,arr[i],i,arr)
    }
  }

  return accumulator;

}


console.log([1,2,3,4,5].myReduce((elem1,elem2)=>elem1+elem2,0))