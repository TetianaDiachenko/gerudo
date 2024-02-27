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

//Changed header when scrolling
const header = document.querySelector('.header');
document.addEventListener('scroll', () => {
	if(window.scrollY > 0) {
		header.classList.add('scrolled');
	} else {
		header.classList.remove('scrolled');
	}
})

// Scroll to selected section
function onLinkClick(e) {
	const link = e.target;
	if(link.dataset.goto && document.querySelector(link.dataset.goto)) {
		const gotoBlock = document.querySelector(link.dataset.goto);
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
//Scroll on click scrollebleLinks
const scrollebleLinks = document.querySelectorAll('a[data-goto]');
if(scrollebleLinks.length > 0) {
	scrollebleLinks.forEach(scrollebleLink => {
		scrollebleLink.addEventListener("click", onLinkClick);
	});
}

//Animated 
const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
   window.addEventListener('scroll', animOnScroll);
   function animOnScroll() {
      for (let index = 0; index < animItems.length; index++) {
         const animItem = animItems[index];
         const animItemHeight = animItem.offsetHeight;
         const animItemOffset = offset(animItem).top;
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
		function offset(el) {
			var rect = el.getBoundingClientRect(),
			scrollLeft = window.scrollX || document.documentElement.scrollLeft,
			scrollTop = window.scrollY || document.documentElement.scrollTop;
			return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	  }
   }
	setTimeout(() => {
		animOnScroll();
	}, 300);   
}
