document.querySelector('.menu-icon').onclick = function () {
   document.querySelector('.menu-icon').classList.toggle('menu-icon-active');
   document.querySelector('.header__menu').classList.toggle('menu-active');
   document.querySelector('body').classList.toggle('lock');
}

document.querySelector('.header__list').onclick = function () {
   document.querySelector('.menu-icon').classList.toggle('menu-icon-active');
   document.querySelector('.header__menu').classList.toggle('menu-active');
   document.querySelector('body').classList.remove('lock');
}



$(document).ready(function () {
   $(".owl-carousel").owlCarousel({
      loop: true,
      nav: true,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      responsive: {
         // breakpoint from 0 up
         0: {
            items: 1,
            nav: false,
            margin: 0,
            stagePadding: 0,

         },
         // breakpoint from 480 up
         550: {
            margin: 20,
            items: 2,
            nav: false
         },
         // breakpoint from 768 up
         780: {
            margin: 50,
            items: 3,
            nav: false
         },
         852: {
            margin: 50,
            items: 3,
            stagePadding: 40,
         },
      }
   });
});


let animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
   window.addEventListener('scroll', animOnScroll);
   function animOnScroll() {
      for (let index = 0; index < animItems.length; index++) {
         const animItem = animItems[index];
         const animItemHeight = animItem.offsetHeight;
         const animItemOffset = offset(animItem).top;
         const animStart = 4;

         let animItemPoint = window.innerHeight - animItemHeight / animStart;

         if (animItemHeight > window.innerHeight) {
            animItemPoint = window.innerHeight - window.innerHeight / animStart;
         }

         if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
            animItem.classList.add('_active');
         } else {
            if (!animItem.classList.contains('._anim-no-hide')) {
               animItem.classList.remove('_active');
            }

         }
      }
   }
   function offset(el) {
      const rect = el.getBoundingClientRect(),
         scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
         scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
   }
   setTimeout(() => {
      animOnScroll();
   }, 300);
}

document.addEventListener('touchstart', onTouchStart, { passive: true });