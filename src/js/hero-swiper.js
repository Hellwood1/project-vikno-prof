import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const swiper = new Swiper('.hero-swiper-init', {
  allowTouchMove: true,
  slidesPerView: 'auto',
  spaceBetween: 8,
  centeredSlides: false,
  a11y: { enabled: false }
});

function setSlideA11y(sw) {
  const total = sw.slides.length;

  sw.slides.forEach((slide, i) => {
    slide.removeAttribute('role');
    slide.setAttribute('aria-roledescription', 'slide');
    slide.setAttribute('aria-label', `${i + 1} з ${total}`);
    slide.setAttribute('tabindex', '-1');
  });

  const active = sw.slides[sw.activeIndex];
  if (active) active.setAttribute('tabindex', '0');
}

setSlideA11y(swiper);
swiper.on('slideChange', () => setSlideA11y(swiper));
swiper.on('slidesLengthChange', () => setSlideA11y(swiper));