  let squares = document.getElementsByTagName("div");
        for (let i = 0; i < squares.length; ++i) {
            squares[i].addEventListener("click", handler);
        };
        function handler(e) {
            this.innerText = ++this.innerText;
        }
