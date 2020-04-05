let each = function(arr, callback, thisArg) {
  let i, length = arr.length;
  for (i = 0; i < length; i = i + 1) {
    callback(arr[i], i, arr);
  }
}

each([1, 2, 3], function(num, i, nums) {
  console.log('step: ' + num + ', jump: ' + i + ', ', nums)
}); 