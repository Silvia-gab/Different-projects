let randomNum = Math.floor(Math.random() * 10) + 1;
console.log(randomNum);
let number = +prompt("Угадайте число от 1 до 10", "");
  do {
    (number != randomNum && number != null)
    let txt = "Попробуйте число по меньше ";
    if (+number < randomNum) txt = "Попробуйте число по больше ";
    number = prompt(txt + number, "");
  } while (number != randomNum && number != null);
if (number == randomNum) { 
  alert("УРА! Ты угадал!" + randomNum);
} else alert("Не  сдавайтесь!");