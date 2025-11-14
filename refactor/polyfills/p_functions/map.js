Array.prototype.myMap = function (callback, thisArg) {
  if (this === null) throw new TypeError("this is null or not defined");
  if (typeof callback !== "function")
    throw new TypeError("callback is not a function");

  const arr = Object(this);
  const len = arr.length ?? 0;

  const result = new Array(len);

  for (let i = 0; i < len; i++) {
    if (i in arr) {
      result[i] = callback.call(thisArg, arr[i], i, arr);
    }
  }
  return result;
};

const res = [1, 2, 3, 4, 5].myMap((elem) => elem * 5);
console.log(res);
