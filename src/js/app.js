import * as flsFunctions from "./modules/functions.js";
flsFunctions.isWebp();

//Burger menu
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
	iconMenu.addEventListener("click", function(e) {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
		
	});
}

//Scrolled
const header = document.querySelector('.header');
document.addEventListener('scroll', () => {
	if(window.scrollY > 0) {
		header.classList.add('scrolled');

	} else {
		header.classList.remove('scrolled');
	}
})