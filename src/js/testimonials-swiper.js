import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const swiper = new Swiper('.testimonials-swiper-init', {
  loop: false,
  slidesPerView: 'auto',
  spaceBetween: 20,
  centeredSlides: false,
  slidesOffsetBefore: 0,
  slidesOffsetAfter: 20,


  breakpoints: {
    768: {
      slidesPerView: 2.1,
      slidesPerGroup: 2,
      spaceBetween: 14,
    },
    // десктоп і більше
    1440: {
      slidesPerView: 3.3,
      slidesPerGroup: 3,
      spaceBetween: 4,
      navigation: {
        nextEl: '.right-arrow-btn',
        prevEl: '.left-arrow-btn',
      },
    },
  },
});

document
  .querySelectorAll('.left-arrow-btn, .right-arrow-btn')
  .forEach(btn => {
    btn.addEventListener('click', () => {
      btn.blur();
    });
  });
