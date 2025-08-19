import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const swiper = new Swiper('.hero-swiper-init', {


  allowTouchMove: true,

  slidesPerView: 'auto',
  spaceBetween: 8,
  centeredSlides: false,
});
