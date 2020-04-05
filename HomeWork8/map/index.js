let map = function (arr, callback, thisArg) {
  let i, length = arr.length, result = [];
  for (i = 0; i < length; i = i + 1) {
    result.push(callback.call(thisArg, arr[i], i, arr));
  }
  return result;
};
let pows = map ([5, 15, 50], Math.pow);


console.log(pows);
