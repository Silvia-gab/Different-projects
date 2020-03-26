let max = +prompt("Введите число");
        let s = "";
        for (let i = 1; i <= max; i++) {
            for (let j = 1; j <= i; j++) {
                s += "*";
            }
            s += "\n";
        }
        console.log(s);