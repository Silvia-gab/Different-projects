let everyone;

document.querySelector('.list').addEventListener('click',e => {
	if(e.target.classList.contains('al')) {
		if (everyone) everyone.style.background = '';
		everyone = e.target;
		e.target.style.background = "red";
	}
});