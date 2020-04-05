var isEven = function isEven(currentElement, array) {
  if(currentElement % 2 === 0) {
      return true;
  } else {
      return false;
  }
}

var arr1 = [1, 2, 3, 4, 5, 6];
arr1.some(isEven); 
var arr2 = [1, 3, 5, 7];
console.log(arr2.some(isEven));  