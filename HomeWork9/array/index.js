let nestedArray = [1, [2], 3];
let arrayCopy = JSON.parse(JSON.stringify(nestedArray)); 

arrayCopy[0] = '11';  
arrayCopy[1][0] = '3';  
console.log(arrayCopy);  

console.log(nestedArray);  