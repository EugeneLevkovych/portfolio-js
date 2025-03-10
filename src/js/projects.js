import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const swiperProjects = new Swiper('.swiper-2', {
  direction: 'horizontal',
  slidesPerView: 1,
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  mousewheel: {
    enabled: true,
    invert: true,
  },

  navigation: {
    // enabled: false,
    prevEl: '.projects-arrow-icon-left',
    nextEl: '.projects-arrow-icon-right',
  },
});
