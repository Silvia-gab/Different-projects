function calc(a, b, action) {
  let result = null;

  switch (action) {
    case "+":
      result = a + b;
      break;
    case "-":
      result = a - b;
      break;
    case "/":
      result = a / b;
      break;
    case "%":
      result = a % b;
      break;
    case "**":
      result = a ** b;
      break;
    case "*":
      result = a * b;
      break;
    default:
      return NaN;
  }
  return result;
}
const r1 = calc(1, 2, "+");
console.log(r1);
const r2 = calc(8, 5, "-");
console.log(r2);
const r3 = calc(10, 5, "/");
console.log(r3);
const r4 = calc(10, 15, "%");
console.log(r4);
const r5 = calc(10, 3, "**");
console.log(r5);
const r6 = calc(10, 5, "*");
console.log(r6);