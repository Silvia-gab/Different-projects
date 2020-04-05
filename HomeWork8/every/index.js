let arr = [3, 4, 5, 9];


for (let i = 0; i < arr.length; i++){
  if (arr[i] < 5) 
  console.log('yes');
}
let a = arr.every(function(b) {
  return b < 5;
});
console.log(a);
