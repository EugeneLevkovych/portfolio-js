import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

document.addEventListener('DOMContentLoaded', function () {
  new Accordion('.accordion-container', {
    duration: 1000,
    showMultiple: true,
    openOnInit: [0],
  });
});
// --------------Swiper------------------
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  spaceBetween: 0,
  loop: true,
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  mousewheel: {
    enabled: true,
    invert: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
    },

    768: {
      slidesPerView: 3,
    },

    1280: {
      slidesPerView: 6,
    },
  },
  navigation: {
    // enabled: false,
    nextEl: '.a-m-swiper-button',
  },
});
