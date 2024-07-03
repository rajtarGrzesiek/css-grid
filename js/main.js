const navMobile = document.querySelector(".nav-mobile");
const navBtn = document.querySelector(".hamburger");
const footerYear = document.querySelector(".footer__year");
// ⏬ zmienna przechowująca wszystkie linki w nawigacji mobilnej
const navLinks = document.querySelectorAll(".nav__link");

const handleNav = () => {
	navBtn.classList.toggle("is-active");
	navMobile.classList.toggle("nav-mobile--active");

	navLinks.forEach((item) => {
		item.addEventListener("click", () => {
			navBtn.classList.remove("is-active");
			navMobile.classList.remove("nav-mobile--active");
		});
	});
	handleNavItemsAnimation();
};

const handleNavItemsAnimation = () => {
	let delayTime = 0;

	navLinks.forEach((item) => {
		item.classList.toggle("nav-items-animation");
		item.style.animationDelay = "." + delayTime + "s";
		delayTime++;
	});
};

const deleteAnimation = () => {
	navLinks.forEach((item) => {
		item.classList.remove("nav-items-animation");
	});
};

navBtn.addEventListener("click", handleNav);

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};

handleCurrentYear();
