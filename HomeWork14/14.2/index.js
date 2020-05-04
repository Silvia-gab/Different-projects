const elements = document.querySelectorAll("div");

for (const element of elements) {
	element.addEventListener("click", changeColor);
}

var colorList = ["yellow", "green", "blue" ];

function changeColor(event) {
	if(event.target.style.backgroundColor === "") {
		event.target.style.backgroundColor = colorList[0];
		return;
	}

	const colorIndex = colorList.findIndex(function(color) {
		return color === event.target.style.backgroundColor;
	});

	const index = colorIndex + 1 < colorList.length ? colorIndex + 1 : 0;

	event.target.style.backgroundColor = colorList[index];
}
       