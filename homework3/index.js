const name = prompt("Как Вас зовут?");
const age = +prompt("Сколько Вам лет?");
const result = confirm ("Алькоголь употребляем?");

if (result === true && age > 40) {

alert ('Не злоупотребляй!');
}
else if (result === true && age < 18) {

alert ('Ты что?! Маме расскажу!');
}
else if (result === true && age > 18 && age < 40) {

alert ('Только водку с пивом не мешай!');
}
else if (result === false) {
alert ('Так держать!');
}