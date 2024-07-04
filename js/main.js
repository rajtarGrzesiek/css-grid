const navMobile = document.querySelector(".nav-mobile");
const navBtn = document.querySelector(".hamburger");
const footerYear = document.querySelector(".footer__year");
// ⏬ zmienna przechowująca wszystkie linki w nawigacji mobilnej
const navLinks = document.querySelectorAll(".nav__link-mobile");

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

const mediaQuery = window.matchMedia("(min-width: 992px)");

function closeMenu() {
	navBtn.classList.remove("is-active");
	navMobile.classList.remove("nav-mobile--active");
}

function handleBreakpointChange(e) {
	if (e.matches) {
		// Gdy szerokość okna jest większa niż 992px, zamknij menu
		closeMenu();
	}
}

// Dodajemy nasłuchiwanie na zmiany szerokości okna
mediaQuery.addEventListener("change", handleBreakpointChange);

// Sprawdzamy początkowy stan
handleBreakpointChange(mediaQuery);
