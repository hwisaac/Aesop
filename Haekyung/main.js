new Swiper('.sec2 .swiper', {
  observe: true,
  observeParents: true,
  loop: false,
  slidesPerView: 3.2,
  spaceBetween: 15,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
