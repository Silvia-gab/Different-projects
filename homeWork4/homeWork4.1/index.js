let num = +prompt("Введите число");
    let triangle = "";
     for (let i = 1; i <= num; i++) {
       for (let j = 1; j <= i; j++) {
        triangle += "#";
        } 
         triangle += "\n";
        }
        console.log(triangle);