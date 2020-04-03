const obj1 = { name: "FrondEnd" };
const obj2 = { name: "FrondEnd" };

function user(a, b) {
  for (const key in obj1) {
    if (obj1[key] === obj2[key]) return true;
  }
  return false;
}

console.log(user(obj1, obj2));