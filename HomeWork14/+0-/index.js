const containers = document.querySelectorAll(".square");

for (const container of containers) {
  container.addEventListener("click", onClick);
}

function onClick(event) {
  if (event.target instanceof HTMLButtonElement) {
    const span = event.target.parentElement.querySelector("span");

    switch (event.target.dataset.operator) {
      case "+": {
        let value = Number(span.innerHTML);
        span.innerHTML = value + 1;
        break;
      }
      case "-": {
        let value = Number(span.innerHTML);
        span.innerHTML = value - 1;
        break;
      }
      default:
        break;
    }
  }
}
