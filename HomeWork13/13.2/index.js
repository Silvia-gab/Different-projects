const COUNT = 10;
        let array = new Array(COUNT);
 
        fillMatrix();
        console.log(array);
        showMatrix();
 
        function fillMatrix() {
            for (let i = 0; i < COUNT; ++i) {
                array[i] = new Array(COUNT);
                for (let j = 0; j < COUNT; ++j) {
                    array[i][j] = i * 10 + j + 1;
                }
            }
        }
        function showMatrix() {
            for (let i = 0; i < COUNT; ++i) {
                for (let j = 0; j < COUNT; ++j) {
                    document.write(array[i][j].toString().padStart(4,"\u00A0"));
                   
                }
                document.write("<br />");
            }
        }