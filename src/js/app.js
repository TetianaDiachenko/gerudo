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

//Scroll on click
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if(menuLinks.length > 0) {
	menuLinks.forEach(menuLink => {
		menuLink.addEventListener("click", onMenuLinkClick);
	});
	function onMenuLinkClick(e) {
		const menuLink = e.target;
		if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
			const gotoBlock = document.querySelector(menuLink.dataset.goto);
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - header.offsetHeight;

			if(iconMenu.classList.contains('_active')) {
				document.body.classList.remove('_lock');
				iconMenu.classList.remove('_active');
				menuBody.classList.remove('_active');
			}

			window.scrollTo({
				top: gotoBlockValue,
				behavior: "smooth"
			});
			e.preventDefault();
		}	
	}
}

//Scroll on click button 
const buttonLinks = document.querySelectorAll('.button[data-goto]');
if(buttonLinks.length > 0) {
	buttonLinks.forEach(buttonLink => {
		buttonLink.addEventListener("click", onButtonClick);
	});
	function onButtonClick(e) {
		const buttonLink = e.target;
		if(buttonLink.dataset.goto && document.querySelector(buttonLink.dataset.goto)) {
			const gotoBlock = document.querySelector(buttonLink.dataset.goto);
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - header.offsetHeight;

			window.scrollTo({
				top: gotoBlockValue,
				behavior: "smooth"
			});
			e.preventDefault();
		}	
	}
}

//Animated 
const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
   window.addEventListener('scroll', animOnScroll);
   function animOnScroll() {
      for (let index = 0; index < animItems.length; index++) {
         const animItem = animItems[index];
         const animItemHeight = animItem.offsetHeight;
         const animItemOffset = animItem.getBoundingClientRect().top;
         const animStart = 4;

         let animItemPoint = window.innerHeight - animItemHeight / animStart;
         if(animItemHeight > window.innerHeight) {
            animItemPoint = window.innerHeight - window.innerHeight / animStart;
         }
         if ((scrollY > (animItemOffset - animItemPoint)) && (scrollY < (animItemOffset + animItemHeight))) {
            animItem.classList.add('_appear');
         } else {
				if (!animItem.classList.contains('_anim-no-hide')) {
            	animItem.classList.remove('_appear');
				}
         }
      }
   }
	setTimeout(() => {
		animOnScroll();
	}, 300);   
}
