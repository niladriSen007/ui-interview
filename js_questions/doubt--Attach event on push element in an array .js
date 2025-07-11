const actual_push_method = Array.prototype.push

Array.prototype.push = function (...args) {
  const result = actual_push_method.apply(this, args)
  if (this.onPush) {
    this.onPush(args)
  }
  return result
}

Array.prototype.setPushCallback = function (callback) {
  if (typeof callback === "function") {
    this.onPush = callback
  } else {
    throw new TypeError("Callback must be a function")
  }
}

const arr=[]
arr.setPushCallback(function(item){
  console.log("Items pushed",item)
})
arr.push(1)
arr.push(2,3)
