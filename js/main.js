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
   $('.slider-container').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay: true,
      autoplaySpeed: 2000,
      prevArrow: '<img src="img/left1.png" class="slick-prev" alt="prev">',
      nextArrow: '<img src="img/right1.png" class"slick-next" alt="next">',
      responsive: [
         {
            breakpoint: 1100,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 1,
               infinite: true

            }
         },
         {
            breakpoint: 700,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
            }
         },
         {
            breakpoint: 400,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
               arrows: false
            }
         }

      ]
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