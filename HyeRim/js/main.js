const swiper = new Swiper('.perfume.swiper', {
  loop: false,
  slidesPerView: 4,
  spaceBetween: 50,
  speed: 700,
  breakpoints: {
    640: {
      slidesPerView: 2
    },
    1080: {
      slidesPerView: 3
    },
    1500: {
      slidesPerView: 4
    },
  },
  scrollbar: {
    el: '.perfume .swiper-scrollbar',
    dragSize: 200,
  },
  navigation: {
    nextEl: '.perfume .swiper-button-next',
    prevEl: '.perfume .swiper-button-prev',
  },
});