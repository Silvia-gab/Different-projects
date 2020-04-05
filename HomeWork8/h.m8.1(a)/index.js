let str = "abc";
let symbol = "a";

 function isSymbolPresentInString(str,symbol) {

    if (~str.indexOf(symbol)) {
    return ("true");
 }    else {
   return ("false");
 }  
 }
  
console.log(isSymbolPresentInString(str,symbol)); 