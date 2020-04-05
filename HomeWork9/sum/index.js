function sum(a) {
  return function(b) {
    return a + b;
  };
}
console.log(3);
console.log(sum(3)(5));
console.log(sum(20)(8)); 
