const origin = { name: "Hillel", data: 3.3, year: 2.2 };


function copy(target, origin) {
  for (origin in target) {
    target = origin;
  }
  return result;
}

const result = copy;

const r = copy ({}, origin);

console.log(origin, r);
console.log(r === origin);
console.log(r.name === origin.name);