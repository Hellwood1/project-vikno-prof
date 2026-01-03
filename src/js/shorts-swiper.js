import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const swiper = new Swiper('.shorts-swiper-init', {
  loop: false,
  slidesPerView: 1,
  spaceBetween: 20,
  centeredSlides: true,
    navigation: {
        nextEl: '.shorts-right-arrow-btn',
        prevEl: '.shorts-left-arrow-btn',
      },

  breakpoints: {
    768: {
      slidesPerView: 2.5,
      slidesPerGroup: 2,
      spaceBetween: 0,
      centeredSlides: false,
    },

    1440: {
      slidesPerView: 5,
      slidesPerGroup: 4,
      spaceBetween: 0,
      centeredSlides: false,
    },
  },
});

document
  .querySelectorAll('.shorts-left-arrow-btn, .shorts-right-arrow-btn')
  .forEach(btn => {
    btn.addEventListener('click', () => {
      btn.blur();
    });
  });
