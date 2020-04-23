  let squares = document.getElementsByTagName("div");
        for (let i = 0; i < squares.length; ++i) {
            squares[i].addEventListener("click", handler);
        };
        [...document.getElementsByTagName('div')].forEach(e =>
    e.addEventListener('click', ()=> e.innerText = ++e.innerText ) );
