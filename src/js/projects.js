import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const swiperProjects = new Swiper('.swiper-2', {
  direction: 'horizontal',
  speed: 1000,
  slidesPerView: 1,
  keyboard: {
    enabled: true,
    onlyInViewport: false,
    pageUpDown: true,
  },
  mousewheel: {
    enabled: true,
    invert: true,
  },

  navigation: {
    prevEl: '.projects-arrow-icon-left',
    nextEl: '.projects-arrow-icon-right',
  },
});
