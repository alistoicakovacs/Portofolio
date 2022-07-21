const hamburgerButton = document.getElementById("hamburger");
const navList = document.getElementById("nav-list");
const contactMeButton = document.querySelector(".button");

contactMeButton.addEventListener("click", function () {
	window.open("mailto:alistoicakovacs@icloud.com");
});

function toggleButton() {
	navList.classList.toggle("show");
}

hamburgerButton.addEventListener("click", toggleButton);
