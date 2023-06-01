function toggleMenu() {
	document.querySelector(".navigation").classList.toggle("open");
	document.querySelector("#hamButton").classList.toggle("open");
}

const x = document.querySelector("#hamButton");
x.onclick = toggleMenu;