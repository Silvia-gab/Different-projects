let animal ={
  run: true,
  jump: true
};

let mammal = {
  milk() {
    if(this.IsMale) {
      console.log('run and jump');
    }
  },
female(){
  this.isFemale = true;
}
};
mammal.__proto__ = animal;
mammal.female();


let raccoon = {
  steal: true,
}
raccoon.__proto__ = mammal;


console.log(mammal.isFemale);
console.log(raccoon.steal);
console.log(raccoon.isFemale);
console.log(raccoon.jump);



